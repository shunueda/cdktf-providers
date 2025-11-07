// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RotatedSecretMongodbAtlasConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Doppler config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas#config RotatedSecretMongodbAtlas#config}
  */
  readonly config: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas#id RotatedSecretMongodbAtlas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The slug of the integration to use for this rotated secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas#integration RotatedSecretMongodbAtlas#integration}
  */
  readonly integration: string;
  /**
  * The name of the rotated secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas#name RotatedSecretMongodbAtlas#name}
  */
  readonly name: string;
  /**
  * The name of the Doppler project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas#project RotatedSecretMongodbAtlas#project}
  */
  readonly project: string;
  /**
  * The Mongo DB Atlas Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas#project_id RotatedSecretMongodbAtlas#project_id}
  */
  readonly projectId: string;
  /**
  * How frequently to rotate the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas#rotation_period_sec RotatedSecretMongodbAtlas#rotation_period_sec}
  */
  readonly rotationPeriodSec: number;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas#credentials RotatedSecretMongodbAtlas#credentials}
  */
  readonly credentials: RotatedSecretMongodbAtlasCredentials[] | cdktf.IResolvable;
}
export interface RotatedSecretMongodbAtlasCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas#password RotatedSecretMongodbAtlas#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas#username RotatedSecretMongodbAtlas#username}
  */
  readonly username: string;
}

export function rotatedSecretMongodbAtlasCredentialsToTerraform(struct?: RotatedSecretMongodbAtlasCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function rotatedSecretMongodbAtlasCredentialsToHclTerraform(struct?: RotatedSecretMongodbAtlasCredentials | cdktf.IResolvable): any {
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

export class RotatedSecretMongodbAtlasCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RotatedSecretMongodbAtlasCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RotatedSecretMongodbAtlasCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
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

export class RotatedSecretMongodbAtlasCredentialsList extends cdktf.ComplexList {
  public internalValue? : RotatedSecretMongodbAtlasCredentials[] | cdktf.IResolvable

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
  public get(index: number): RotatedSecretMongodbAtlasCredentialsOutputReference {
    return new RotatedSecretMongodbAtlasCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas doppler_rotated_secret_mongodb_atlas}
*/
export class RotatedSecretMongodbAtlas extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_rotated_secret_mongodb_atlas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RotatedSecretMongodbAtlas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RotatedSecretMongodbAtlas to import
  * @param importFromId The id of the existing RotatedSecretMongodbAtlas that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RotatedSecretMongodbAtlas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_rotated_secret_mongodb_atlas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_mongodb_atlas doppler_rotated_secret_mongodb_atlas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RotatedSecretMongodbAtlasConfig
  */
  public constructor(scope: Construct, id: string, config: RotatedSecretMongodbAtlasConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_rotated_secret_mongodb_atlas',
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
    this._id = config.id;
    this._integration = config.integration;
    this._name = config.name;
    this._project = config.project;
    this._projectId = config.projectId;
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
  private _credentials = new RotatedSecretMongodbAtlasCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: RotatedSecretMongodbAtlasCredentials[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      integration: cdktf.stringToTerraform(this._integration),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      project_id: cdktf.stringToTerraform(this._projectId),
      rotation_period_sec: cdktf.numberToTerraform(this._rotationPeriodSec),
      credentials: cdktf.listMapper(rotatedSecretMongodbAtlasCredentialsToTerraform, true)(this._credentials.internalValue),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
        value: cdktf.listMapperHcl(rotatedSecretMongodbAtlasCredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RotatedSecretMongodbAtlasCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
