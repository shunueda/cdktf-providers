// https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The integration's access key. Provide for: `DO_SPACES`, `AMAZON`, `PUSHOVER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#access_key Integration#access_key}
  */
  readonly accessKey?: string;
  /**
  * Defines whether or not integration can be used in all pipelines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#all_pipelines_allowed Integration#all_pipelines_allowed}
  */
  readonly allPipelinesAllowed?: boolean | cdktf.IResolvable;
  /**
  * List of pipeline IDs that is allowed to use the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#allowed_pipelines Integration#allowed_pipelines}
  */
  readonly allowedPipelines?: number[];
  /**
  * The integration's API key. Provide for: `CLOUDFLARE`, `GOOGLE_SERVICE_ACCOUNT`, `STACK_HAWK`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#api_key Integration#api_key}
  */
  readonly apiKey?: string;
  /**
  * The integration's application's ID. Provide for: `AZURE_CLOUD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#app_id Integration#app_id}
  */
  readonly appId?: string;
  /**
  * The integration's audience. Provide for OIDC with: `AMAZON`, `AZURE_CLOUD`, `GOOGLE_SERVICE_ACCOUNT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#audience Integration#audience}
  */
  readonly audience?: string;
  /**
  * The integration's auth type. Provide for: `AMAZON`, `AZURE_CLOUD`, `GOOGLE_SERVICE_ACCOUNT`. Allowed: `DEFAULT, TRUSTED, OIDC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#auth_type Integration#auth_type}
  */
  readonly authType?: string;
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#domain Integration#domain}
  */
  readonly domain: string;
  /**
  * The integration's email. Provide for: `CLOUDFLARE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#email Integration#email}
  */
  readonly email?: string;
  /**
  * The integration's google config. Provide for `GOOGLE_SERVICE_ACCOUNT` OIDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#google_config Integration#google_config}
  */
  readonly googleConfig?: string;
  /**
  * The integration's google project. Provide for `GOOGLE_SERVICE_ACCOUNT` OIDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#google_project Integration#google_project}
  */
  readonly googleProject?: string;
  /**
  * The integration's identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#identifier Integration#identifier}
  */
  readonly identifier?: string;
  /**
  * The integration's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#name Integration#name}
  */
  readonly name: string;
  /**
  * The integration's partner token. Provide for: `SHOPIFY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#partner_token Integration#partner_token}
  */
  readonly partnerToken?: string;
  /**
  * The integration's password. Provide for: `AZURE_CLOUD`, `UPCLOUD`, `DOCKER_HUB`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#password Integration#password}
  */
  readonly password?: string;
  /**
  * The project's name. Provide along with scopes: `PROJECT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#project_name Integration#project_name}
  */
  readonly projectName?: string;
  /**
  * The integration's scope. Allowed:
  * 
  * `WORKSPACE` - all workspace members can use the integration
  * 
  * `PROJECT` - only project members can use the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#scope Integration#scope}
  */
  readonly scope: string;
  /**
  * The integration's secret key. Provide for: `DO_SPACES`, `AMAZON`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#secret_key Integration#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The integration's shop. Provide for: `SHOPIFY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#shop Integration#shop}
  */
  readonly shop?: string;
  /**
  * The integration's tenant's ID. Provide for: `AZURE_CLOUD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#tenant_id Integration#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The integration's token. Provide for: `DIGITAL_OCEAN`, `SHOPIFY`, `RACKSPACE`, `CLOUDFLARE`, `NEW_RELIC`, `SENTRY`, `ROLLBAR`, `DATADOG`, `HONEYBADGER`, `VULTR`, `SENTRY_ENTERPRISE`, `LOGGLY`, `FIREBASE`, `GHOST_INSPECTOR`, `PUSHOVER`, `GIT_LAB`, `GIT_HUB`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#token Integration#token}
  */
  readonly token?: string;
  /**
  * The integration's type. Allowed: `DIGITAL_OCEAN`, `AMAZON`, `SHOPIFY`, `PUSHOVER`, `RACKSPACE`, `CLOUDFLARE`, `NEW_RELIC`, `SENTRY`, `ROLLBAR`, `DATADOG`, `DO_SPACES`, `HONEYBADGER`, `VULTR`, `SENTRY_ENTERPRISE`, `LOGGLY`, `FIREBASE`, `UPCLOUD`, `GHOST_INSPECTOR`, `AZURE_CLOUD`, `DOCKER_HUB`, `GOOGLE_SERVICE_ACCOUNT`, `GIT_HUB`, `GIT_LAB`, `STACK_HAWK`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#type Integration#type}
  */
  readonly type: string;
  /**
  * The integration's username. Provide for: `UPCLOUD`, `RACKSPACE`, `DOCKER_HUB`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#username Integration#username}
  */
  readonly username?: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#permissions Integration#permissions}
  */
  readonly permissions?: IntegrationPermissions[] | cdktf.IResolvable;
  /**
  * role_assumption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#role_assumption Integration#role_assumption}
  */
  readonly roleAssumption?: IntegrationRoleAssumption[] | cdktf.IResolvable;
}
export interface IntegrationPermissionsGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#access_level Integration#access_level}
  */
  readonly accessLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#id Integration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function integrationPermissionsGroupToTerraform(struct?: IntegrationPermissionsGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function integrationPermissionsGroupToHclTerraform(struct?: IntegrationPermissionsGroup | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationPermissionsGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationPermissionsGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationPermissionsGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._id = value.id;
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

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class IntegrationPermissionsGroupList extends cdktf.ComplexList {
  public internalValue? : IntegrationPermissionsGroup[] | cdktf.IResolvable

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
  public get(index: number): IntegrationPermissionsGroupOutputReference {
    return new IntegrationPermissionsGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationPermissionsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#access_level Integration#access_level}
  */
  readonly accessLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#id Integration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function integrationPermissionsUserToTerraform(struct?: IntegrationPermissionsUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function integrationPermissionsUserToHclTerraform(struct?: IntegrationPermissionsUser | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationPermissionsUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationPermissionsUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationPermissionsUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._id = value.id;
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

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class IntegrationPermissionsUserList extends cdktf.ComplexList {
  public internalValue? : IntegrationPermissionsUser[] | cdktf.IResolvable

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
  public get(index: number): IntegrationPermissionsUserOutputReference {
    return new IntegrationPermissionsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#admins Integration#admins}
  */
  readonly admins?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#others Integration#others}
  */
  readonly others?: string;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#group Integration#group}
  */
  readonly group?: IntegrationPermissionsGroup[] | cdktf.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#user Integration#user}
  */
  readonly user?: IntegrationPermissionsUser[] | cdktf.IResolvable;
}

export function integrationPermissionsToTerraform(struct?: IntegrationPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admins: cdktf.stringToTerraform(struct!.admins),
    others: cdktf.stringToTerraform(struct!.others),
    group: cdktf.listMapper(integrationPermissionsGroupToTerraform, true)(struct!.group),
    user: cdktf.listMapper(integrationPermissionsUserToTerraform, true)(struct!.user),
  }
}


export function integrationPermissionsToHclTerraform(struct?: IntegrationPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admins: {
      value: cdktf.stringToHclTerraform(struct!.admins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    others: {
      value: cdktf.stringToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.listMapperHcl(integrationPermissionsGroupToHclTerraform, true)(struct!.group),
      isBlock: true,
      type: "set",
      storageClassType: "IntegrationPermissionsGroupList",
    },
    user: {
      value: cdktf.listMapperHcl(integrationPermissionsUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "set",
      storageClassType: "IntegrationPermissionsUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admins !== undefined) {
      hasAnyValues = true;
      internalValueResult.admins = this._admins;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admins = undefined;
      this._others = undefined;
      this._group.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admins = value.admins;
      this._others = value.others;
      this._group.internalValue = value.group;
      this._user.internalValue = value.user;
    }
  }

  // admins - computed: false, optional: true, required: false
  private _admins?: string; 
  public get admins() {
    return this.getStringAttribute('admins');
  }
  public set admins(value: string) {
    this._admins = value;
  }
  public resetAdmins() {
    this._admins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminsInput() {
    return this._admins;
  }

  // others - computed: false, optional: true, required: false
  private _others?: string; 
  public get others() {
    return this.getStringAttribute('others');
  }
  public set others(value: string) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // group - computed: false, optional: true, required: false
  private _group = new IntegrationPermissionsGroupList(this, "group", true);
  public get group() {
    return this._group;
  }
  public putGroup(value: IntegrationPermissionsGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new IntegrationPermissionsUserList(this, "user", true);
  public get user() {
    return this._user;
  }
  public putUser(value: IntegrationPermissionsUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}

export class IntegrationPermissionsList extends cdktf.ComplexList {
  public internalValue? : IntegrationPermissions[] | cdktf.IResolvable

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
  public get(index: number): IntegrationPermissionsOutputReference {
    return new IntegrationPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationRoleAssumption {
  /**
  * The integration's AWS role ARN to assume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#arn Integration#arn}
  */
  readonly arn: string;
  /**
  * The integration's AWS session duration in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#duration Integration#duration}
  */
  readonly duration?: number;
  /**
  * The integration's AWS external ID to send when assuming AWS role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#external_id Integration#external_id}
  */
  readonly externalId?: string;
}

export function integrationRoleAssumptionToTerraform(struct?: IntegrationRoleAssumption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    duration: cdktf.numberToTerraform(struct!.duration),
    external_id: cdktf.stringToTerraform(struct!.externalId),
  }
}


export function integrationRoleAssumptionToHclTerraform(struct?: IntegrationRoleAssumption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationRoleAssumptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationRoleAssumption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationRoleAssumption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._duration = undefined;
      this._externalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._duration = value.duration;
      this._externalId = value.externalId;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class IntegrationRoleAssumptionList extends cdktf.ComplexList {
  public internalValue? : IntegrationRoleAssumption[] | cdktf.IResolvable

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
  public get(index: number): IntegrationRoleAssumptionOutputReference {
    return new IntegrationRoleAssumptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration buddy_integration}
*/
export class Integration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Integration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Integration to import
  * @param importFromId The id of the existing Integration that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Integration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/integration buddy_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_integration',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.38.0',
        providerVersionConstraint: '1.38.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKey = config.accessKey;
    this._allPipelinesAllowed = config.allPipelinesAllowed;
    this._allowedPipelines = config.allowedPipelines;
    this._apiKey = config.apiKey;
    this._appId = config.appId;
    this._audience = config.audience;
    this._authType = config.authType;
    this._domain = config.domain;
    this._email = config.email;
    this._googleConfig = config.googleConfig;
    this._googleProject = config.googleProject;
    this._identifier = config.identifier;
    this._name = config.name;
    this._partnerToken = config.partnerToken;
    this._password = config.password;
    this._projectName = config.projectName;
    this._scope = config.scope;
    this._secretKey = config.secretKey;
    this._shop = config.shop;
    this._tenantId = config.tenantId;
    this._token = config.token;
    this._type = config.type;
    this._username = config.username;
    this._permissions.internalValue = config.permissions;
    this._roleAssumption.internalValue = config.roleAssumption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // all_pipelines_allowed - computed: true, optional: true, required: false
  private _allPipelinesAllowed?: boolean | cdktf.IResolvable; 
  public get allPipelinesAllowed() {
    return this.getBooleanAttribute('all_pipelines_allowed');
  }
  public set allPipelinesAllowed(value: boolean | cdktf.IResolvable) {
    this._allPipelinesAllowed = value;
  }
  public resetAllPipelinesAllowed() {
    this._allPipelinesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPipelinesAllowedInput() {
    return this._allPipelinesAllowed;
  }

  // allowed_pipelines - computed: true, optional: true, required: false
  private _allowedPipelines?: number[]; 
  public get allowedPipelines() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('allowed_pipelines')));
  }
  public set allowedPipelines(value: number[]) {
    this._allowedPipelines = value;
  }
  public resetAllowedPipelines() {
    this._allowedPipelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPipelinesInput() {
    return this._allowedPipelines;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // google_config - computed: false, optional: true, required: false
  private _googleConfig?: string; 
  public get googleConfig() {
    return this.getStringAttribute('google_config');
  }
  public set googleConfig(value: string) {
    this._googleConfig = value;
  }
  public resetGoogleConfig() {
    this._googleConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleConfigInput() {
    return this._googleConfig;
  }

  // google_project - computed: false, optional: true, required: false
  private _googleProject?: string; 
  public get googleProject() {
    return this.getStringAttribute('google_project');
  }
  public set googleProject(value: string) {
    this._googleProject = value;
  }
  public resetGoogleProject() {
    this._googleProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleProjectInput() {
    return this._googleProject;
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
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

  // partner_token - computed: false, optional: true, required: false
  private _partnerToken?: string; 
  public get partnerToken() {
    return this.getStringAttribute('partner_token');
  }
  public set partnerToken(value: string) {
    this._partnerToken = value;
  }
  public resetPartnerToken() {
    this._partnerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerTokenInput() {
    return this._partnerToken;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
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

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // shop - computed: false, optional: true, required: false
  private _shop?: string; 
  public get shop() {
    return this.getStringAttribute('shop');
  }
  public set shop(value: string) {
    this._shop = value;
  }
  public resetShop() {
    this._shop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopInput() {
    return this._shop;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new IntegrationPermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: IntegrationPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // role_assumption - computed: false, optional: true, required: false
  private _roleAssumption = new IntegrationRoleAssumptionList(this, "role_assumption", false);
  public get roleAssumption() {
    return this._roleAssumption;
  }
  public putRoleAssumption(value: IntegrationRoleAssumption[] | cdktf.IResolvable) {
    this._roleAssumption.internalValue = value;
  }
  public resetRoleAssumption() {
    this._roleAssumption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleAssumptionInput() {
    return this._roleAssumption.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      all_pipelines_allowed: cdktf.booleanToTerraform(this._allPipelinesAllowed),
      allowed_pipelines: cdktf.listMapper(cdktf.numberToTerraform, false)(this._allowedPipelines),
      api_key: cdktf.stringToTerraform(this._apiKey),
      app_id: cdktf.stringToTerraform(this._appId),
      audience: cdktf.stringToTerraform(this._audience),
      auth_type: cdktf.stringToTerraform(this._authType),
      domain: cdktf.stringToTerraform(this._domain),
      email: cdktf.stringToTerraform(this._email),
      google_config: cdktf.stringToTerraform(this._googleConfig),
      google_project: cdktf.stringToTerraform(this._googleProject),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      partner_token: cdktf.stringToTerraform(this._partnerToken),
      password: cdktf.stringToTerraform(this._password),
      project_name: cdktf.stringToTerraform(this._projectName),
      scope: cdktf.stringToTerraform(this._scope),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      shop: cdktf.stringToTerraform(this._shop),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      token: cdktf.stringToTerraform(this._token),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
      permissions: cdktf.listMapper(integrationPermissionsToTerraform, true)(this._permissions.internalValue),
      role_assumption: cdktf.listMapper(integrationRoleAssumptionToTerraform, true)(this._roleAssumption.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      all_pipelines_allowed: {
        value: cdktf.booleanToHclTerraform(this._allPipelinesAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_pipelines: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._allowedPipelines),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_config: {
        value: cdktf.stringToHclTerraform(this._googleConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_project: {
        value: cdktf.stringToHclTerraform(this._googleProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      partner_token: {
        value: cdktf.stringToHclTerraform(this._partnerToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shop: {
        value: cdktf.stringToHclTerraform(this._shop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.listMapperHcl(integrationPermissionsToHclTerraform, true)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationPermissionsList",
      },
      role_assumption: {
        value: cdktf.listMapperHcl(integrationRoleAssumptionToHclTerraform, true)(this._roleAssumption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationRoleAssumptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
