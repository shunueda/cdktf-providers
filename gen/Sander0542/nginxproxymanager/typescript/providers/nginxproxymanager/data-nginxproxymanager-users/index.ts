// https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNginxproxymanagerUsersConfig extends cdktf.TerraformMetaArguments {
}
export interface DataNginxproxymanagerUsersUsersPermissions {
}

export function dataNginxproxymanagerUsersUsersPermissionsToTerraform(struct?: DataNginxproxymanagerUsersUsersPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNginxproxymanagerUsersUsersPermissionsToHclTerraform(struct?: DataNginxproxymanagerUsersUsersPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNginxproxymanagerUsersUsersPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNginxproxymanagerUsersUsersPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNginxproxymanagerUsersUsersPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_lists - computed: true, optional: false, required: false
  public get accessLists() {
    return this.getStringAttribute('access_lists');
  }

  // certificates - computed: true, optional: false, required: false
  public get certificates() {
    return this.getStringAttribute('certificates');
  }

  // dead_hosts - computed: true, optional: false, required: false
  public get deadHosts() {
    return this.getStringAttribute('dead_hosts');
  }

  // proxy_hosts - computed: true, optional: false, required: false
  public get proxyHosts() {
    return this.getStringAttribute('proxy_hosts');
  }

  // redirection_hosts - computed: true, optional: false, required: false
  public get redirectionHosts() {
    return this.getStringAttribute('redirection_hosts');
  }

  // streams - computed: true, optional: false, required: false
  public get streams() {
    return this.getStringAttribute('streams');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}
export interface DataNginxproxymanagerUsersUsers {
}

export function dataNginxproxymanagerUsersUsersToTerraform(struct?: DataNginxproxymanagerUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNginxproxymanagerUsersUsersToHclTerraform(struct?: DataNginxproxymanagerUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNginxproxymanagerUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNginxproxymanagerUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNginxproxymanagerUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avatar - computed: true, optional: false, required: false
  public get avatar() {
    return this.getStringAttribute('avatar');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_disabled - computed: true, optional: false, required: false
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nickname - computed: true, optional: false, required: false
  public get nickname() {
    return this.getStringAttribute('nickname');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataNginxproxymanagerUsersUsersPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
}

export class DataNginxproxymanagerUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataNginxproxymanagerUsersUsersOutputReference {
    return new DataNginxproxymanagerUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/users nginxproxymanager_users}
*/
export class DataNginxproxymanagerUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nginxproxymanager_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNginxproxymanagerUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNginxproxymanagerUsers to import
  * @param importFromId The id of the existing DataNginxproxymanagerUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNginxproxymanagerUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nginxproxymanager_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/users nginxproxymanager_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNginxproxymanagerUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNginxproxymanagerUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nginxproxymanager_users',
      terraformGeneratorMetadata: {
        providerName: 'nginxproxymanager',
        providerVersion: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // users - computed: true, optional: false, required: false
  private _users = new DataNginxproxymanagerUsersUsersList(this, "users", true);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
