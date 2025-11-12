// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/user#id DataAviUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/user#name DataAviUser#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/user#uuid DataAviUser#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviUserAccess {
}

export function dataAviUserAccessToTerraform(struct?: DataAviUserAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUserAccessToHclTerraform(struct?: DataAviUserAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUserAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUserAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUserAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_tenants - computed: true, optional: false, required: false
  public get allTenants() {
    return this.getStringAttribute('all_tenants');
  }

  // role_ref - computed: true, optional: false, required: false
  public get roleRef() {
    return this.getStringAttribute('role_ref');
  }

  // tenant_ref - computed: true, optional: false, required: false
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
}

export class DataAviUserAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUserAccessOutputReference {
    return new DataAviUserAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/user avi_user}
*/
export class DataAviUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviUser to import
  * @param importFromId The id of the existing DataAviUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/user avi_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_user',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: false, required: false
  private _access = new DataAviUserAccessList(this, "access", false);
  public get access() {
    return this._access;
  }

  // anonymous_user - computed: true, optional: false, required: false
  public get anonymousUser() {
    return this.getStringAttribute('anonymous_user');
  }

  // date_joined - computed: true, optional: false, required: false
  public get dateJoined() {
    return this.getStringAttribute('date_joined');
  }

  // default_tenant_ref - computed: true, optional: false, required: false
  public get defaultTenantRef() {
    return this.getStringAttribute('default_tenant_ref');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
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

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getStringAttribute('is_active');
  }

  // is_internal_user - computed: true, optional: false, required: false
  public get isInternalUser() {
    return this.getStringAttribute('is_internal_user');
  }

  // is_staff - computed: true, optional: false, required: false
  public get isStaff() {
    return this.getStringAttribute('is_staff');
  }

  // is_superuser - computed: true, optional: false, required: false
  public get isSuperuser() {
    return this.getStringAttribute('is_superuser');
  }

  // local - computed: true, optional: false, required: false
  public get local() {
    return this.getStringAttribute('local');
  }

  // logged_in - computed: true, optional: false, required: false
  public get loggedIn() {
    return this.getStringAttribute('logged_in');
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // passwordless - computed: true, optional: false, required: false
  public get passwordless() {
    return this.getStringAttribute('passwordless');
  }

  // recovery_token - computed: true, optional: false, required: false
  public get recoveryToken() {
    return this.getStringAttribute('recovery_token');
  }

  // service_user - computed: true, optional: false, required: false
  public get serviceUser() {
    return this.getStringAttribute('service_user');
  }

  // token_expiration_date - computed: true, optional: false, required: false
  public get tokenExpirationDate() {
    return this.getStringAttribute('token_expiration_date');
  }

  // ui_property - computed: true, optional: false, required: false
  public get uiProperty() {
    return this.getStringAttribute('ui_property');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // unix_crypt_password - computed: true, optional: false, required: false
  public get unixCryptPassword() {
    return this.getStringAttribute('unix_crypt_password');
  }

  // user_profile_ref - computed: true, optional: false, required: false
  public get userProfileRef() {
    return this.getStringAttribute('user_profile_ref');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
