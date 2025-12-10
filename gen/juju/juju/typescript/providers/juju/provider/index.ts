// https://registry.terraform.io/providers/juju/juju/1.1.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JujuProviderConfig {
  /**
  * If the controller was deployed with a self-signed certificate: This is the certificate to use for identification. This can also be set by the `JUJU_CA_CERT` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#ca_certificate JujuProvider#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * If using JAAS: This is the client ID (OAuth2.0, created by the external identity provider) to be used. This can also be set by the `JUJU_CLIENT_ID` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#client_id JujuProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * If using JAAS: This is the client secret (OAuth2.0, created by the external identity provider) to be used. This can also be set by the `JUJU_CLIENT_SECRET` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#client_secret JujuProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * This is the controller addresses to connect to, defaults to localhost:17070, multiple addresses can be provided in this format: <host>:<port>,<host>:<port>,.... This can also be set by the `JUJU_CONTROLLER_ADDRESSES` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#controller_addresses JujuProvider#controller_addresses}
  */
  readonly controllerAddresses?: string;
  /**
  * Additional controller details for cross-model integrations. The map key is the controller name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#offering_controllers JujuProvider#offering_controllers}
  */
  readonly offeringControllers?: { [key: string]: JujuProviderOfferingControllers } | cdktf.IResolvable;
  /**
  * This is the password of the username to be used. This can also be set by the `JUJU_PASSWORD` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#password JujuProvider#password}
  */
  readonly password?: string;
  /**
  * Whether to issue a warning instead of an error and continue if a resource deletion fails. This can also be set by the `JUJU_SKIP_FAILED_DELETION` environment variable. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#skip_failed_deletion JujuProvider#skip_failed_deletion}
  */
  readonly skipFailedDeletion?: boolean | cdktf.IResolvable;
  /**
  * This is the username registered with the controller to be used. This can also be set by the `JUJU_USERNAME` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#username JujuProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#alias JujuProvider#alias}
  */
  readonly alias?: string;
}
export interface JujuProviderOfferingControllers {
  /**
  * CA certificate for the controller if using a self-signed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#ca_certificate JujuProvider#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * The client ID (OAuth2.0, created by the external identity provider) to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#client_id JujuProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret (OAuth2.0, created by the external identity provider) to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#client_secret JujuProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Controller addresses to connect to. Multiple addresses can be provided in this format: <host>:<port>,<host>:<port>,....
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#controller_addresses JujuProvider#controller_addresses}
  */
  readonly controllerAddresses: string;
  /**
  * Password for the controller username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#password JujuProvider#password}
  */
  readonly password?: string;
  /**
  * Username registered with the controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#username JujuProvider#username}
  */
  readonly username?: string;
}

export function jujuProviderOfferingControllersToTerraform(struct?: JujuProviderOfferingControllers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    controller_addresses: cdktf.stringToTerraform(struct!.controllerAddresses),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function jujuProviderOfferingControllersToHclTerraform(struct?: JujuProviderOfferingControllers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_addresses: {
      value: cdktf.stringToHclTerraform(struct!.controllerAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs juju}
*/
export class JujuProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JujuProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JujuProvider to import
  * @param importFromId The id of the existing JujuProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JujuProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs juju} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JujuProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: JujuProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'juju',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '1.1.1',
        providerVersionConstraint: '1.1.1'
      },
      terraformProviderSource: 'juju/juju'
    });
    this._caCertificate = config.caCertificate;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._controllerAddresses = config.controllerAddresses;
    this._offeringControllers = config.offeringControllers;
    this._password = config.password;
    this._skipFailedDeletion = config.skipFailedDeletion;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this._caCertificate;
  }
  public set caCertificate(value: string | undefined) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // controller_addresses - computed: false, optional: true, required: false
  private _controllerAddresses?: string; 
  public get controllerAddresses() {
    return this._controllerAddresses;
  }
  public set controllerAddresses(value: string | undefined) {
    this._controllerAddresses = value;
  }
  public resetControllerAddresses() {
    this._controllerAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerAddressesInput() {
    return this._controllerAddresses;
  }

  // offering_controllers - computed: false, optional: true, required: false
  private _offeringControllers?: { [key: string]: JujuProviderOfferingControllers } | cdktf.IResolvable; 
  public get offeringControllers() {
    return this._offeringControllers;
  }
  public set offeringControllers(value: { [key: string]: JujuProviderOfferingControllers } | cdktf.IResolvable | undefined) {
    this._offeringControllers = value;
  }
  public resetOfferingControllers() {
    this._offeringControllers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offeringControllersInput() {
    return this._offeringControllers;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // skip_failed_deletion - computed: false, optional: true, required: false
  private _skipFailedDeletion?: boolean | cdktf.IResolvable; 
  public get skipFailedDeletion() {
    return this._skipFailedDeletion;
  }
  public set skipFailedDeletion(value: boolean | cdktf.IResolvable | undefined) {
    this._skipFailedDeletion = value;
  }
  public resetSkipFailedDeletion() {
    this._skipFailedDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFailedDeletionInput() {
    return this._skipFailedDeletion;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_certificate: cdktf.stringToTerraform(this._caCertificate),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      controller_addresses: cdktf.stringToTerraform(this._controllerAddresses),
      offering_controllers: cdktf.hashMapper(jujuProviderOfferingControllersToTerraform)(this._offeringControllers),
      password: cdktf.stringToTerraform(this._password),
      skip_failed_deletion: cdktf.booleanToTerraform(this._skipFailedDeletion),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_certificate: {
        value: cdktf.stringToHclTerraform(this._caCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_addresses: {
        value: cdktf.stringToHclTerraform(this._controllerAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offering_controllers: {
        value: cdktf.hashMapperHcl(jujuProviderOfferingControllersToHclTerraform)(this._offeringControllers),
        isBlock: true,
        type: "map",
        storageClassType: "JujuProviderOfferingControllersMap",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_failed_deletion: {
        value: cdktf.booleanToHclTerraform(this._skipFailedDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
