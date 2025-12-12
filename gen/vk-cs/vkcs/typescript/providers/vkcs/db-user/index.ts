// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of names of the databases, that user is created for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user#databases DbUser#databases}
  */
  readonly databases?: string[];
  /**
  * ID of the instance or cluster that user is created for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user#dbms_id DbUser#dbms_id}
  */
  readonly dbmsId: string;
  /**
  * IP address of the host that user will be accessible from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user#host DbUser#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user#id DbUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the user. Changing this creates a new user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user#name DbUser#name}
  */
  readonly name: string;
  /**
  * The password of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user#password DbUser#password}
  */
  readonly password: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user#timeouts DbUser#timeouts}
  */
  readonly timeouts?: DbUserTimeouts;
  /**
  * vendor_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user#vendor_options DbUser#vendor_options}
  */
  readonly vendorOptions?: DbUserVendorOptions;
}
export interface DbUserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user#create DbUser#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user#delete DbUser#delete}
  */
  readonly delete?: string;
}

export function dbUserTimeoutsToTerraform(struct?: DbUserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function dbUserTimeoutsToHclTerraform(struct?: DbUserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbUserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbUserTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbUserTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}
export interface DbUserVendorOptions {
  /**
  * Boolean to control whether to user deletion should be skipped. If set to true, the resource will be removed from the state, but the remote object will not be deleted. This is useful for PostgreSQL, where users cannot be deleted from the API if they own database objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user#skip_deletion DbUser#skip_deletion}
  */
  readonly skipDeletion?: boolean | cdktf.IResolvable;
}

export function dbUserVendorOptionsToTerraform(struct?: DbUserVendorOptionsOutputReference | DbUserVendorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_deletion: cdktf.booleanToTerraform(struct!.skipDeletion),
  }
}


export function dbUserVendorOptionsToHclTerraform(struct?: DbUserVendorOptionsOutputReference | DbUserVendorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.skipDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbUserVendorOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbUserVendorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDeletion = this._skipDeletion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbUserVendorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipDeletion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipDeletion = value.skipDeletion;
    }
  }

  // skip_deletion - computed: false, optional: true, required: false
  private _skipDeletion?: boolean | cdktf.IResolvable; 
  public get skipDeletion() {
    return this.getBooleanAttribute('skip_deletion');
  }
  public set skipDeletion(value: boolean | cdktf.IResolvable) {
    this._skipDeletion = value;
  }
  public resetSkipDeletion() {
    this._skipDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDeletionInput() {
    return this._skipDeletion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user vkcs_db_user}
*/
export class DbUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_db_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbUser to import
  * @param importFromId The id of the existing DbUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_db_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/db_user vkcs_db_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbUserConfig
  */
  public constructor(scope: Construct, id: string, config: DbUserConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_db_user',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.1',
        providerVersionConstraint: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databases = config.databases;
    this._dbmsId = config.dbmsId;
    this._host = config.host;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._timeouts.internalValue = config.timeouts;
    this._vendorOptions.internalValue = config.vendorOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // databases - computed: true, optional: true, required: false
  private _databases?: string[]; 
  public get databases() {
    return cdktf.Fn.tolist(this.getListAttribute('databases'));
  }
  public set databases(value: string[]) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
  }

  // dbms_id - computed: false, optional: false, required: true
  private _dbmsId?: string; 
  public get dbmsId() {
    return this.getStringAttribute('dbms_id');
  }
  public set dbmsId(value: string) {
    this._dbmsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbmsIdInput() {
    return this._dbmsId;
  }

  // dbms_type - computed: true, optional: false, required: false
  public get dbmsType() {
    return this.getStringAttribute('dbms_type');
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbUserTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vendor_options - computed: false, optional: true, required: false
  private _vendorOptions = new DbUserVendorOptionsOutputReference(this, "vendor_options");
  public get vendorOptions() {
    return this._vendorOptions;
  }
  public putVendorOptions(value: DbUserVendorOptions) {
    this._vendorOptions.internalValue = value;
  }
  public resetVendorOptions() {
    this._vendorOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorOptionsInput() {
    return this._vendorOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      databases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._databases),
      dbms_id: cdktf.stringToTerraform(this._dbmsId),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      timeouts: dbUserTimeoutsToTerraform(this._timeouts.internalValue),
      vendor_options: dbUserVendorOptionsToTerraform(this._vendorOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      databases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._databases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dbms_id: {
        value: cdktf.stringToHclTerraform(this._dbmsId),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dbUserTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbUserTimeouts",
      },
      vendor_options: {
        value: dbUserVendorOptionsToHclTerraform(this._vendorOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DbUserVendorOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
