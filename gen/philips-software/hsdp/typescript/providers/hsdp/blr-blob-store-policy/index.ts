// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlrBlobStorePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#id BlrBlobStorePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#principal BlrBlobStorePolicy#principal}
  */
  readonly principal?: BlrBlobStorePolicyPrincipal;
  /**
  * statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#statement BlrBlobStorePolicy#statement}
  */
  readonly statement: BlrBlobStorePolicyStatement;
}
export interface BlrBlobStorePolicyPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#endpoint BlrBlobStorePolicy#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#environment BlrBlobStorePolicy#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#oauth2_client_id BlrBlobStorePolicy#oauth2_client_id}
  */
  readonly oauth2ClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#oauth2_password BlrBlobStorePolicy#oauth2_password}
  */
  readonly oauth2Password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#password BlrBlobStorePolicy#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#region BlrBlobStorePolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#service_id BlrBlobStorePolicy#service_id}
  */
  readonly serviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#service_private_key BlrBlobStorePolicy#service_private_key}
  */
  readonly servicePrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#uaa_password BlrBlobStorePolicy#uaa_password}
  */
  readonly uaaPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#uaa_username BlrBlobStorePolicy#uaa_username}
  */
  readonly uaaUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#username BlrBlobStorePolicy#username}
  */
  readonly username?: string;
}

export function blrBlobStorePolicyPrincipalToTerraform(struct?: BlrBlobStorePolicyPrincipalOutputReference | BlrBlobStorePolicyPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    environment: cdktf.stringToTerraform(struct!.environment),
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_password: cdktf.stringToTerraform(struct!.oauth2Password),
    password: cdktf.stringToTerraform(struct!.password),
    region: cdktf.stringToTerraform(struct!.region),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    service_private_key: cdktf.stringToTerraform(struct!.servicePrivateKey),
    uaa_password: cdktf.stringToTerraform(struct!.uaaPassword),
    uaa_username: cdktf.stringToTerraform(struct!.uaaUsername),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function blrBlobStorePolicyPrincipalToHclTerraform(struct?: BlrBlobStorePolicyPrincipalOutputReference | BlrBlobStorePolicyPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_client_id: {
      value: cdktf.stringToHclTerraform(struct!.oauth2ClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_password: {
      value: cdktf.stringToHclTerraform(struct!.oauth2Password),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_private_key: {
      value: cdktf.stringToHclTerraform(struct!.servicePrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uaa_password: {
      value: cdktf.stringToHclTerraform(struct!.uaaPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uaa_username: {
      value: cdktf.stringToHclTerraform(struct!.uaaUsername),
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

export class BlrBlobStorePolicyPrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlrBlobStorePolicyPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._oauth2ClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientId = this._oauth2ClientId;
    }
    if (this._oauth2Password !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Password = this._oauth2Password;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._servicePrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrivateKey = this._servicePrivateKey;
    }
    if (this._uaaPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.uaaPassword = this._uaaPassword;
    }
    if (this._uaaUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.uaaUsername = this._uaaUsername;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlrBlobStorePolicyPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._environment = undefined;
      this._oauth2ClientId = undefined;
      this._oauth2Password = undefined;
      this._password = undefined;
      this._region = undefined;
      this._serviceId = undefined;
      this._servicePrivateKey = undefined;
      this._uaaPassword = undefined;
      this._uaaUsername = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._environment = value.environment;
      this._oauth2ClientId = value.oauth2ClientId;
      this._oauth2Password = value.oauth2Password;
      this._password = value.password;
      this._region = value.region;
      this._serviceId = value.serviceId;
      this._servicePrivateKey = value.servicePrivateKey;
      this._uaaPassword = value.uaaPassword;
      this._uaaUsername = value.uaaUsername;
      this._username = value.username;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // oauth2_client_id - computed: false, optional: true, required: false
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  public resetOauth2ClientId() {
    this._oauth2ClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_password - computed: false, optional: true, required: false
  private _oauth2Password?: string; 
  public get oauth2Password() {
    return this.getStringAttribute('oauth2_password');
  }
  public set oauth2Password(value: string) {
    this._oauth2Password = value;
  }
  public resetOauth2Password() {
    this._oauth2Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PasswordInput() {
    return this._oauth2Password;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_private_key - computed: false, optional: true, required: false
  private _servicePrivateKey?: string; 
  public get servicePrivateKey() {
    return this.getStringAttribute('service_private_key');
  }
  public set servicePrivateKey(value: string) {
    this._servicePrivateKey = value;
  }
  public resetServicePrivateKey() {
    this._servicePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrivateKeyInput() {
    return this._servicePrivateKey;
  }

  // uaa_password - computed: false, optional: true, required: false
  private _uaaPassword?: string; 
  public get uaaPassword() {
    return this.getStringAttribute('uaa_password');
  }
  public set uaaPassword(value: string) {
    this._uaaPassword = value;
  }
  public resetUaaPassword() {
    this._uaaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaPasswordInput() {
    return this._uaaPassword;
  }

  // uaa_username - computed: false, optional: true, required: false
  private _uaaUsername?: string; 
  public get uaaUsername() {
    return this.getStringAttribute('uaa_username');
  }
  public set uaaUsername(value: string) {
    this._uaaUsername = value;
  }
  public resetUaaUsername() {
    this._uaaUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaUsernameInput() {
    return this._uaaUsername;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface BlrBlobStorePolicyStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#action BlrBlobStorePolicy#action}
  */
  readonly action: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#effect BlrBlobStorePolicy#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#principal BlrBlobStorePolicy#principal}
  */
  readonly principal: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#resource BlrBlobStorePolicy#resource}
  */
  readonly resource?: string[];
}

export function blrBlobStorePolicyStatementToTerraform(struct?: BlrBlobStorePolicyStatementOutputReference | BlrBlobStorePolicyStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action),
    effect: cdktf.stringToTerraform(struct!.effect),
    principal: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principal),
    resource: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resource),
  }
}


export function blrBlobStorePolicyStatementToHclTerraform(struct?: BlrBlobStorePolicyStatementOutputReference | BlrBlobStorePolicyStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principal),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resource),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlrBlobStorePolicyStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlrBlobStorePolicyStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlrBlobStorePolicyStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._effect = undefined;
      this._principal = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._effect = value.effect;
      this._principal = value.principal;
      this._resource = value.resource;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string[]; 
  public get action() {
    return cdktf.Fn.tolist(this.getListAttribute('action'));
  }
  public set action(value: string[]) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string[]; 
  public get principal() {
    return cdktf.Fn.tolist(this.getListAttribute('principal'));
  }
  public set principal(value: string[]) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string[]; 
  public get resource() {
    return cdktf.Fn.tolist(this.getListAttribute('resource'));
  }
  public set resource(value: string[]) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy hsdp_blr_blob_store_policy}
*/
export class BlrBlobStorePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_blr_blob_store_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlrBlobStorePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlrBlobStorePolicy to import
  * @param importFromId The id of the existing BlrBlobStorePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlrBlobStorePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_blr_blob_store_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/blr_blob_store_policy hsdp_blr_blob_store_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlrBlobStorePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BlrBlobStorePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_blr_blob_store_policy',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
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
    this._principal.internalValue = config.principal;
    this._statement.internalValue = config.statement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // principal - computed: false, optional: true, required: false
  private _principal = new BlrBlobStorePolicyPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: BlrBlobStorePolicyPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // statement - computed: false, optional: false, required: true
  private _statement = new BlrBlobStorePolicyStatementOutputReference(this, "statement");
  public get statement() {
    return this._statement;
  }
  public putStatement(value: BlrBlobStorePolicyStatement) {
    this._statement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      principal: blrBlobStorePolicyPrincipalToTerraform(this._principal.internalValue),
      statement: blrBlobStorePolicyStatementToTerraform(this._statement.internalValue),
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
      principal: {
        value: blrBlobStorePolicyPrincipalToHclTerraform(this._principal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlrBlobStorePolicyPrincipalList",
      },
      statement: {
        value: blrBlobStorePolicyStatementToHclTerraform(this._statement.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BlrBlobStorePolicyStatementList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
