// https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#app App#app}
  */
  readonly app: string;
  /**
  * The databases the app uses.
  * 
  *     You can use this field to link databases to the app. The database resources must be created before the app resource, and the database resources must have the same project ID as the app resource.
  * 
  *     This is only necessary if the specific app is not implicitly linked to a database by the backend. This is the case for apps like WordPress or TYPO3, which are always linked to a database. In these cases, you can (or should, even) omit the `databases` attribute. You can still retrieve the linked databases from the observed state, but you should not manage them manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#databases App#databases}
  */
  readonly databases?: AppDatabases[] | cdktf.IResolvable;
  /**
  * The dependencies of the app.
  * 
  *     You can omit these to use the suggested dependencies for the app (in which case you can later select the dependencies from the resource state).
  * 
  *     If you specify dependencies, you must specify the exact version of the dependency. To select a version using a semantic versioning constraint, use the `mittwald_systemsoftware` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#dependencies App#dependencies}
  */
  readonly dependencies?: { [key: string]: AppDependencies } | cdktf.IResolvable;
  /**
  * The description of the app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#description App#description}
  */
  readonly description: string;
  /**
  * The document root of the app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#document_root App#document_root}
  */
  readonly documentRoot?: string;
  /**
  * The ID of the project the app belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#project_id App#project_id}
  */
  readonly projectId: string;
  /**
  * The update policy of the app; one of `none`, `patchLevel` or `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#update_policy App#update_policy}
  */
  readonly updatePolicy: string;
  /**
  * The user inputs of the app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#user_inputs App#user_inputs}
  */
  readonly userInputs?: { [key: string]: string };
  /**
  * The desired version of the app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#version App#version}
  */
  readonly version: string;
}
export interface AppDatabases {
  /**
  * The ID of the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#id App#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The kind of the database; one of `mysql` or `redis`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#kind App#kind}
  */
  readonly kind: string;
  /**
  * The purpose of the database; use 'primary' for the primary data storage, or 'cache' for a cache database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#purpose App#purpose}
  */
  readonly purpose: string;
  /**
  * The ID of the database user that the app should use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#user_id App#user_id}
  */
  readonly userId: string;
}

export function appDatabasesToTerraform(struct?: AppDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    kind: cdktf.stringToTerraform(struct!.kind),
    purpose: cdktf.stringToTerraform(struct!.purpose),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function appDatabasesToHclTerraform(struct?: AppDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    purpose: {
      value: cdktf.stringToHclTerraform(struct!.purpose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._purpose !== undefined) {
      hasAnyValues = true;
      internalValueResult.purpose = this._purpose;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._kind = undefined;
      this._purpose = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._kind = value.kind;
      this._purpose = value.purpose;
      this._userId = value.userId;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kind - computed: true, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // purpose - computed: true, optional: false, required: true
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // user_id - computed: true, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class AppDatabasesList extends cdktf.ComplexList {
  public internalValue? : AppDatabases[] | cdktf.IResolvable

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
  public get(index: number): AppDatabasesOutputReference {
    return new AppDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppDependencies {
  /**
  * The update policy of the dependency; one of `none`, `patchLevel` or `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#update_policy App#update_policy}
  */
  readonly updatePolicy: string;
  /**
  * The version of the dependency; please take note that this must be an *exact* version string; to select a version using a semantic versioning constraint, use the `mittwald_systemsoftware` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#version App#version}
  */
  readonly version: string;
}

export function appDependenciesToTerraform(struct?: AppDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update_policy: cdktf.stringToTerraform(struct!.updatePolicy),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function appDependenciesToHclTerraform(struct?: AppDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    update_policy: {
      value: cdktf.stringToHclTerraform(struct!.updatePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppDependenciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): AppDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._updatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePolicy = this._updatePolicy;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._updatePolicy = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._updatePolicy = value.updatePolicy;
      this._version = value.version;
    }
  }

  // update_policy - computed: true, optional: false, required: true
  private _updatePolicy?: string; 
  public get updatePolicy() {
    return this.getStringAttribute('update_policy');
  }
  public set updatePolicy(value: string) {
    this._updatePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy;
  }

  // version - computed: true, optional: false, required: true
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
}

export class AppDependenciesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: AppDependencies } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): AppDependenciesOutputReference {
    return new AppDependenciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app mittwald_app}
*/
export class App extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mittwald_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a App resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the App to import
  * @param importFromId The id of the existing App that should be imported. Refer to the {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the App to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mittwald_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/app mittwald_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConfig
  */
  public constructor(scope: Construct, id: string, config: AppConfig) {
    super(scope, id, {
      terraformResourceType: 'mittwald_app',
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
    this._app = config.app;
    this._databases.internalValue = config.databases;
    this._dependencies.internalValue = config.dependencies;
    this._description = config.description;
    this._documentRoot = config.documentRoot;
    this._projectId = config.projectId;
    this._updatePolicy = config.updatePolicy;
    this._userInputs = config.userInputs;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // databases - computed: true, optional: true, required: false
  private _databases = new AppDatabasesList(this, "databases", true);
  public get databases() {
    return this._databases;
  }
  public putDatabases(value: AppDatabases[] | cdktf.IResolvable) {
    this._databases.internalValue = value;
  }
  public resetDatabases() {
    this._databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases.internalValue;
  }

  // dependencies - computed: true, optional: true, required: false
  private _dependencies = new AppDependenciesMap(this, "dependencies");
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: { [key: string]: AppDependencies } | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
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

  // document_root - computed: false, optional: true, required: false
  private _documentRoot?: string; 
  public get documentRoot() {
    return this.getStringAttribute('document_root');
  }
  public set documentRoot(value: string) {
    this._documentRoot = value;
  }
  public resetDocumentRoot() {
    this._documentRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentRootInput() {
    return this._documentRoot;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installation_path - computed: true, optional: false, required: false
  public get installationPath() {
    return this.getStringAttribute('installation_path');
  }

  // installation_path_absolute - computed: true, optional: false, required: false
  public get installationPathAbsolute() {
    return this.getStringAttribute('installation_path_absolute');
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

  // short_id - computed: true, optional: false, required: false
  public get shortId() {
    return this.getStringAttribute('short_id');
  }

  // ssh_host - computed: true, optional: false, required: false
  public get sshHost() {
    return this.getStringAttribute('ssh_host');
  }

  // update_policy - computed: false, optional: false, required: true
  private _updatePolicy?: string; 
  public get updatePolicy() {
    return this.getStringAttribute('update_policy');
  }
  public set updatePolicy(value: string) {
    this._updatePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy;
  }

  // user_inputs - computed: false, optional: true, required: false
  private _userInputs?: { [key: string]: string }; 
  public get userInputs() {
    return this.getStringMapAttribute('user_inputs');
  }
  public set userInputs(value: { [key: string]: string }) {
    this._userInputs = value;
  }
  public resetUserInputs() {
    this._userInputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInputsInput() {
    return this._userInputs;
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

  // version_current - computed: true, optional: false, required: false
  public get versionCurrent() {
    return this.getStringAttribute('version_current');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app: cdktf.stringToTerraform(this._app),
      databases: cdktf.listMapper(appDatabasesToTerraform, false)(this._databases.internalValue),
      dependencies: cdktf.hashMapper(appDependenciesToTerraform)(this._dependencies.internalValue),
      description: cdktf.stringToTerraform(this._description),
      document_root: cdktf.stringToTerraform(this._documentRoot),
      project_id: cdktf.stringToTerraform(this._projectId),
      update_policy: cdktf.stringToTerraform(this._updatePolicy),
      user_inputs: cdktf.hashMapper(cdktf.stringToTerraform)(this._userInputs),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktf.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databases: {
        value: cdktf.listMapperHcl(appDatabasesToHclTerraform, false)(this._databases.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppDatabasesList",
      },
      dependencies: {
        value: cdktf.hashMapperHcl(appDependenciesToHclTerraform)(this._dependencies.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "AppDependenciesMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_root: {
        value: cdktf.stringToHclTerraform(this._documentRoot),
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
      update_policy: {
        value: cdktf.stringToHclTerraform(this._updatePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_inputs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._userInputs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
