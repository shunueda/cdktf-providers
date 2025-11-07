// https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#character_settings MysqlDatabase#character_settings}
  */
  readonly characterSettings?: MysqlDatabaseCharacterSettings;
  /**
  * Description for your database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#description MysqlDatabase#description}
  */
  readonly description: string;
  /**
  * The ID of the project the database belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#project_id MysqlDatabase#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#user MysqlDatabase#user}
  */
  readonly user: MysqlDatabaseUser;
  /**
  * Version of the database, e.g. `5.7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#version MysqlDatabase#version}
  */
  readonly version: string;
}
export interface MysqlDatabaseCharacterSettings {
  /**
  * Character set of the database, e.g. `utf8mb4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#character_set MysqlDatabase#character_set}
  */
  readonly characterSet?: string;
  /**
  * Collation of the database, e.g. `utf8mb4_general_ci`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#collation MysqlDatabase#collation}
  */
  readonly collation?: string;
}

export function mysqlDatabaseCharacterSettingsToTerraform(struct?: MysqlDatabaseCharacterSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    character_set: cdktf.stringToTerraform(struct!.characterSet),
    collation: cdktf.stringToTerraform(struct!.collation),
  }
}


export function mysqlDatabaseCharacterSettingsToHclTerraform(struct?: MysqlDatabaseCharacterSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    character_set: {
      value: cdktf.stringToHclTerraform(struct!.characterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collation: {
      value: cdktf.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlDatabaseCharacterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MysqlDatabaseCharacterSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._characterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSet = this._characterSet;
    }
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlDatabaseCharacterSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._characterSet = undefined;
      this._collation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._characterSet = value.characterSet;
      this._collation = value.collation;
    }
  }

  // character_set - computed: false, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }
}
export interface MysqlDatabaseUser {
  /**
  * Access level for the database user, e.g. `full` or `readonly`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#access_level MysqlDatabase#access_level}
  */
  readonly accessLevel: string;
  /**
  * Whether the database user should be accessible from outside the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#external_access MysqlDatabase#external_access}
  */
  readonly externalAccess: boolean | cdktf.IResolvable;
  /**
  * Password for the database user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#password MysqlDatabase#password}
  */
  readonly password?: string;
  /**
  * Password for the database user; this field is mutually exclusive with `password` and will be used instead of it. The password is not stored in the database, but only used to create the user. You can use the `mittwald_mysql_password` ephemeral resource to dynamically generate a valid password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#password_wo MysqlDatabase#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version of the password for the database user; this is required when using `password_wo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#password_wo_version MysqlDatabase#password_wo_version}
  */
  readonly passwordWoVersion?: number;
}

export function mysqlDatabaseUserToTerraform(struct?: MysqlDatabaseUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    external_access: cdktf.booleanToTerraform(struct!.externalAccess),
    password: cdktf.stringToTerraform(struct!.password),
    password_wo: cdktf.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktf.numberToTerraform(struct!.passwordWoVersion),
  }
}


export function mysqlDatabaseUserToHclTerraform(struct?: MysqlDatabaseUser | cdktf.IResolvable): any {
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
    external_access: {
      value: cdktf.booleanToHclTerraform(struct!.externalAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktf.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktf.numberToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlDatabaseUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MysqlDatabaseUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._externalAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAccess = this._externalAccess;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlDatabaseUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._externalAccess = undefined;
      this._password = undefined;
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._externalAccess = value.externalAccess;
      this._password = value.password;
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
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

  // external_access - computed: false, optional: false, required: true
  private _externalAccess?: boolean | cdktf.IResolvable; 
  public get externalAccess() {
    return this.getBooleanAttribute('external_access');
  }
  public set externalAccess(value: boolean | cdktf.IResolvable) {
    this._externalAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccessInput() {
    return this._externalAccess;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database mittwald_mysql_database}
*/
export class MysqlDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mittwald_mysql_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlDatabase to import
  * @param importFromId The id of the existing MysqlDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mittwald_mysql_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/mysql_database mittwald_mysql_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'mittwald_mysql_database',
      terraformGeneratorMetadata: {
        providerName: 'mittwald',
        providerVersion: '1.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._characterSettings.internalValue = config.characterSettings;
    this._description = config.description;
    this._projectId = config.projectId;
    this._user.internalValue = config.user;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // character_settings - computed: false, optional: true, required: false
  private _characterSettings = new MysqlDatabaseCharacterSettingsOutputReference(this, "character_settings");
  public get characterSettings() {
    return this._characterSettings;
  }
  public putCharacterSettings(value: MysqlDatabaseCharacterSettings) {
    this._characterSettings.internalValue = value;
  }
  public resetCharacterSettings() {
    this._characterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSettingsInput() {
    return this._characterSettings.internalValue;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // user - computed: false, optional: false, required: true
  private _user = new MysqlDatabaseUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: MysqlDatabaseUser) {
    this._user.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      character_settings: mysqlDatabaseCharacterSettingsToTerraform(this._characterSettings.internalValue),
      description: cdktf.stringToTerraform(this._description),
      project_id: cdktf.stringToTerraform(this._projectId),
      user: mysqlDatabaseUserToTerraform(this._user.internalValue),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      character_settings: {
        value: mysqlDatabaseCharacterSettingsToHclTerraform(this._characterSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MysqlDatabaseCharacterSettings",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: mysqlDatabaseUserToHclTerraform(this._user.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MysqlDatabaseUser",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
