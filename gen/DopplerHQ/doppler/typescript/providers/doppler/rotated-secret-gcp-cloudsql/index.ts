// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RotatedSecretGcpCloudsqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Doppler config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql#config RotatedSecretGcpCloudsql#config}
  */
  readonly config: string;
  /**
  * Cloud SQL database instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql#database_instance RotatedSecretGcpCloudsql#database_instance}
  */
  readonly databaseInstance: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql#id RotatedSecretGcpCloudsql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The slug of the integration to use for this rotated secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql#integration RotatedSecretGcpCloudsql#integration}
  */
  readonly integration: string;
  /**
  * The name of the rotated secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql#name RotatedSecretGcpCloudsql#name}
  */
  readonly name: string;
  /**
  * The name of the Doppler project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql#project RotatedSecretGcpCloudsql#project}
  */
  readonly project: string;
  /**
  * How frequently to rotate the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql#rotation_period_sec RotatedSecretGcpCloudsql#rotation_period_sec}
  */
  readonly rotationPeriodSec: number;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql#credentials RotatedSecretGcpCloudsql#credentials}
  */
  readonly credentials: RotatedSecretGcpCloudsqlCredentials[] | cdktf.IResolvable;
}
export interface RotatedSecretGcpCloudsqlCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql#password RotatedSecretGcpCloudsql#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql#user_host_name RotatedSecretGcpCloudsql#user_host_name}
  */
  readonly userHostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql#username RotatedSecretGcpCloudsql#username}
  */
  readonly username: string;
}

export function rotatedSecretGcpCloudsqlCredentialsToTerraform(struct?: RotatedSecretGcpCloudsqlCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    user_host_name: cdktf.stringToTerraform(struct!.userHostName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function rotatedSecretGcpCloudsqlCredentialsToHclTerraform(struct?: RotatedSecretGcpCloudsqlCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_host_name: {
      value: cdktf.stringToHclTerraform(struct!.userHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RotatedSecretGcpCloudsqlCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RotatedSecretGcpCloudsqlCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userHostName = this._userHostName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RotatedSecretGcpCloudsqlCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._userHostName = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._userHostName = value.userHostName;
      this._username = value.username;
    }
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

  // user_host_name - computed: false, optional: true, required: false
  private _userHostName?: string; 
  public get userHostName() {
    return this.getStringAttribute('user_host_name');
  }
  public set userHostName(value: string) {
    this._userHostName = value;
  }
  public resetUserHostName() {
    this._userHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userHostNameInput() {
    return this._userHostName;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class RotatedSecretGcpCloudsqlCredentialsList extends cdktf.ComplexList {
  public internalValue? : RotatedSecretGcpCloudsqlCredentials[] | cdktf.IResolvable

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
  public get(index: number): RotatedSecretGcpCloudsqlCredentialsOutputReference {
    return new RotatedSecretGcpCloudsqlCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql doppler_rotated_secret_gcp_cloudsql}
*/
export class RotatedSecretGcpCloudsql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_rotated_secret_gcp_cloudsql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RotatedSecretGcpCloudsql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RotatedSecretGcpCloudsql to import
  * @param importFromId The id of the existing RotatedSecretGcpCloudsql that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RotatedSecretGcpCloudsql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_rotated_secret_gcp_cloudsql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_gcp_cloudsql doppler_rotated_secret_gcp_cloudsql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RotatedSecretGcpCloudsqlConfig
  */
  public constructor(scope: Construct, id: string, config: RotatedSecretGcpCloudsqlConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_rotated_secret_gcp_cloudsql',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._databaseInstance = config.databaseInstance;
    this._id = config.id;
    this._integration = config.integration;
    this._name = config.name;
    this._project = config.project;
    this._rotationPeriodSec = config.rotationPeriodSec;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // database_instance - computed: false, optional: false, required: true
  private _databaseInstance?: string; 
  public get databaseInstance() {
    return this.getStringAttribute('database_instance');
  }
  public set databaseInstance(value: string) {
    this._databaseInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInstanceInput() {
    return this._databaseInstance;
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

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // rotation_period_sec - computed: false, optional: false, required: true
  private _rotationPeriodSec?: number; 
  public get rotationPeriodSec() {
    return this.getNumberAttribute('rotation_period_sec');
  }
  public set rotationPeriodSec(value: number) {
    this._rotationPeriodSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodSecInput() {
    return this._rotationPeriodSec;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new RotatedSecretGcpCloudsqlCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: RotatedSecretGcpCloudsqlCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      database_instance: cdktf.stringToTerraform(this._databaseInstance),
      id: cdktf.stringToTerraform(this._id),
      integration: cdktf.stringToTerraform(this._integration),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      rotation_period_sec: cdktf.numberToTerraform(this._rotationPeriodSec),
      credentials: cdktf.listMapper(rotatedSecretGcpCloudsqlCredentialsToTerraform, true)(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_instance: {
        value: cdktf.stringToHclTerraform(this._databaseInstance),
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
      integration: {
        value: cdktf.stringToHclTerraform(this._integration),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_period_sec: {
        value: cdktf.numberToHclTerraform(this._rotationPeriodSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      credentials: {
        value: cdktf.listMapperHcl(rotatedSecretGcpCloudsqlCredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RotatedSecretGcpCloudsqlCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
