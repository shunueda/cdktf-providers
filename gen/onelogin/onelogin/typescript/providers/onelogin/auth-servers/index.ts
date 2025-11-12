// https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/auth_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/auth_servers#description AuthServers#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/auth_servers#id AuthServers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/auth_servers#name AuthServers#name}
  */
  readonly name: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/auth_servers#configuration AuthServers#configuration}
  */
  readonly configuration: AuthServersConfiguration;
}
export interface AuthServersConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/auth_servers#access_token_expiration_minutes AuthServers#access_token_expiration_minutes}
  */
  readonly accessTokenExpirationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/auth_servers#audiences AuthServers#audiences}
  */
  readonly audiences: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/auth_servers#refresh_token_expiration_minutes AuthServers#refresh_token_expiration_minutes}
  */
  readonly refreshTokenExpirationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/auth_servers#resource_identifier AuthServers#resource_identifier}
  */
  readonly resourceIdentifier: string;
}

export function authServersConfigurationToTerraform(struct?: AuthServersConfigurationOutputReference | AuthServersConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_expiration_minutes: cdktf.numberToTerraform(struct!.accessTokenExpirationMinutes),
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    refresh_token_expiration_minutes: cdktf.numberToTerraform(struct!.refreshTokenExpirationMinutes),
    resource_identifier: cdktf.stringToTerraform(struct!.resourceIdentifier),
  }
}


export function authServersConfigurationToHclTerraform(struct?: AuthServersConfigurationOutputReference | AuthServersConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_expiration_minutes: {
      value: cdktf.numberToHclTerraform(struct!.accessTokenExpirationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_token_expiration_minutes: {
      value: cdktf.numberToHclTerraform(struct!.refreshTokenExpirationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_identifier: {
      value: cdktf.stringToHclTerraform(struct!.resourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthServersConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthServersConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenExpirationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenExpirationMinutes = this._accessTokenExpirationMinutes;
    }
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._refreshTokenExpirationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenExpirationMinutes = this._refreshTokenExpirationMinutes;
    }
    if (this._resourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIdentifier = this._resourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthServersConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessTokenExpirationMinutes = undefined;
      this._audiences = undefined;
      this._refreshTokenExpirationMinutes = undefined;
      this._resourceIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessTokenExpirationMinutes = value.accessTokenExpirationMinutes;
      this._audiences = value.audiences;
      this._refreshTokenExpirationMinutes = value.refreshTokenExpirationMinutes;
      this._resourceIdentifier = value.resourceIdentifier;
    }
  }

  // access_token_expiration_minutes - computed: true, optional: true, required: false
  private _accessTokenExpirationMinutes?: number; 
  public get accessTokenExpirationMinutes() {
    return this.getNumberAttribute('access_token_expiration_minutes');
  }
  public set accessTokenExpirationMinutes(value: number) {
    this._accessTokenExpirationMinutes = value;
  }
  public resetAccessTokenExpirationMinutes() {
    this._accessTokenExpirationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenExpirationMinutesInput() {
    return this._accessTokenExpirationMinutes;
  }

  // audiences - computed: false, optional: false, required: true
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // refresh_token_expiration_minutes - computed: true, optional: true, required: false
  private _refreshTokenExpirationMinutes?: number; 
  public get refreshTokenExpirationMinutes() {
    return this.getNumberAttribute('refresh_token_expiration_minutes');
  }
  public set refreshTokenExpirationMinutes(value: number) {
    this._refreshTokenExpirationMinutes = value;
  }
  public resetRefreshTokenExpirationMinutes() {
    this._refreshTokenExpirationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenExpirationMinutesInput() {
    return this._refreshTokenExpirationMinutes;
  }

  // resource_identifier - computed: false, optional: false, required: true
  private _resourceIdentifier?: string; 
  public get resourceIdentifier() {
    return this.getStringAttribute('resource_identifier');
  }
  public set resourceIdentifier(value: string) {
    this._resourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdentifierInput() {
    return this._resourceIdentifier;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/auth_servers onelogin_auth_servers}
*/
export class AuthServers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "onelogin_auth_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthServers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthServers to import
  * @param importFromId The id of the existing AuthServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/auth_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "onelogin_auth_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/auth_servers onelogin_auth_servers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthServersConfig
  */
  public constructor(scope: Construct, id: string, config: AuthServersConfig) {
    super(scope, id, {
      terraformResourceType: 'onelogin_auth_servers',
      terraformGeneratorMetadata: {
        providerName: 'onelogin',
        providerVersion: '0.11.2',
        providerVersionConstraint: '0.11.2'
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
    this._id = config.id;
    this._name = config.name;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // configuration - computed: false, optional: false, required: true
  private _configuration = new AuthServersConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AuthServersConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      configuration: authServersConfigurationToTerraform(this._configuration.internalValue),
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
      configuration: {
        value: authServersConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthServersConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
