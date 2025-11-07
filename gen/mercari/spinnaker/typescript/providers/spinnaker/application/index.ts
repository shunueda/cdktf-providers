// https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application#application Application#application}
  */
  readonly application?: string;
  /**
  * Cloud providers that is used by the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application#cloud_providers Application#cloud_providers}
  */
  readonly cloudProviders?: string[];
  /**
  * Email of the owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application#email Application#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default port of the Spinnaker generated links
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application#instance_port Application#instance_port}
  */
  readonly instancePort?: number;
  /**
  * Name of the Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application#name Application#name}
  */
  readonly name?: string;
  /**
  * permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application#permission Application#permission}
  */
  readonly permission?: ApplicationPermission[] | cdktf.IResolvable;
}
export interface ApplicationPermission {
  /**
  * List of access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application#accesses Application#accesses}
  */
  readonly accesses: string[];
  /**
  * User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application#user Application#user}
  */
  readonly user: string;
}

export function applicationPermissionToTerraform(struct?: ApplicationPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accesses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accesses),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function applicationPermissionToHclTerraform(struct?: ApplicationPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accesses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.accesses = this._accesses;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accesses = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accesses = value.accesses;
      this._user = value.user;
    }
  }

  // accesses - computed: false, optional: false, required: true
  private _accesses?: string[]; 
  public get accesses() {
    return this.getListAttribute('accesses');
  }
  public set accesses(value: string[]) {
    this._accesses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessesInput() {
    return this._accesses;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ApplicationPermissionList extends cdktf.ComplexList {
  public internalValue? : ApplicationPermission[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPermissionOutputReference {
    return new ApplicationPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application spinnaker_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spinnaker_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spinnaker_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mercari/spinnaker/0.3.0/docs/resources/application spinnaker_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'spinnaker_application',
      terraformGeneratorMetadata: {
        providerName: 'spinnaker',
        providerVersion: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._application = config.application;
    this._cloudProviders = config.cloudProviders;
    this._email = config.email;
    this._id = config.id;
    this._instancePort = config.instancePort;
    this._name = config.name;
    this._permission.internalValue = config.permission;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // cloud_providers - computed: false, optional: true, required: false
  private _cloudProviders?: string[]; 
  public get cloudProviders() {
    return this.getListAttribute('cloud_providers');
  }
  public set cloudProviders(value: string[]) {
    this._cloudProviders = value;
  }
  public resetCloudProviders() {
    this._cloudProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProvidersInput() {
    return this._cloudProviders;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // instance_port - computed: false, optional: true, required: false
  private _instancePort?: number; 
  public get instancePort() {
    return this.getNumberAttribute('instance_port');
  }
  public set instancePort(value: number) {
    this._instancePort = value;
  }
  public resetInstancePort() {
    this._instancePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePortInput() {
    return this._instancePort;
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

  // permission - computed: false, optional: true, required: false
  private _permission = new ApplicationPermissionList(this, "permission", false);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: ApplicationPermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      cloud_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudProviders),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      instance_port: cdktf.numberToTerraform(this._instancePort),
      name: cdktf.stringToTerraform(this._name),
      permission: cdktf.listMapper(applicationPermissionToTerraform, true)(this._permission.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_providers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudProviders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      instance_port: {
        value: cdktf.numberToHclTerraform(this._instancePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission: {
        value: cdktf.listMapperHcl(applicationPermissionToHclTerraform, true)(this._permission.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationPermissionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
