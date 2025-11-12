// https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#default_from_address Email#default_from_address}
  */
  readonly defaultFromAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#enabled Email#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#id Email#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#name Email#name}
  */
  readonly name: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#credentials Email#credentials}
  */
  readonly credentials: EmailCredentials;
}
export interface EmailCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#access_key_id Email#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#api_key Email#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#api_user Email#api_user}
  */
  readonly apiUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#domain Email#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#region Email#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#secret_access_key Email#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#smtp_host Email#smtp_host}
  */
  readonly smtpHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#smtp_pass Email#smtp_pass}
  */
  readonly smtpPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#smtp_port Email#smtp_port}
  */
  readonly smtpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#smtp_user Email#smtp_user}
  */
  readonly smtpUser?: string;
}

export function emailCredentialsToTerraform(struct?: EmailCredentialsOutputReference | EmailCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_user: cdktf.stringToTerraform(struct!.apiUser),
    domain: cdktf.stringToTerraform(struct!.domain),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    smtp_host: cdktf.stringToTerraform(struct!.smtpHost),
    smtp_pass: cdktf.stringToTerraform(struct!.smtpPass),
    smtp_port: cdktf.numberToTerraform(struct!.smtpPort),
    smtp_user: cdktf.stringToTerraform(struct!.smtpUser),
  }
}


export function emailCredentialsToHclTerraform(struct?: EmailCredentialsOutputReference | EmailCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_user: {
      value: cdktf.stringToHclTerraform(struct!.apiUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_host: {
      value: cdktf.stringToHclTerraform(struct!.smtpHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_pass: {
      value: cdktf.stringToHclTerraform(struct!.smtpPass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_port: {
      value: cdktf.numberToHclTerraform(struct!.smtpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smtp_user: {
      value: cdktf.stringToHclTerraform(struct!.smtpUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUser = this._apiUser;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._smtpHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpHost = this._smtpHost;
    }
    if (this._smtpPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpPass = this._smtpPass;
    }
    if (this._smtpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpPort = this._smtpPort;
    }
    if (this._smtpUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpUser = this._smtpUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._apiKey = undefined;
      this._apiUser = undefined;
      this._domain = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
      this._smtpHost = undefined;
      this._smtpPass = undefined;
      this._smtpPort = undefined;
      this._smtpUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._apiKey = value.apiKey;
      this._apiUser = value.apiUser;
      this._domain = value.domain;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
      this._smtpHost = value.smtpHost;
      this._smtpPass = value.smtpPass;
      this._smtpPort = value.smtpPort;
      this._smtpUser = value.smtpUser;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_user - computed: false, optional: true, required: false
  private _apiUser?: string; 
  public get apiUser() {
    return this.getStringAttribute('api_user');
  }
  public set apiUser(value: string) {
    this._apiUser = value;
  }
  public resetApiUser() {
    this._apiUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUserInput() {
    return this._apiUser;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // smtp_host - computed: false, optional: true, required: false
  private _smtpHost?: string; 
  public get smtpHost() {
    return this.getStringAttribute('smtp_host');
  }
  public set smtpHost(value: string) {
    this._smtpHost = value;
  }
  public resetSmtpHost() {
    this._smtpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpHostInput() {
    return this._smtpHost;
  }

  // smtp_pass - computed: false, optional: true, required: false
  private _smtpPass?: string; 
  public get smtpPass() {
    return this.getStringAttribute('smtp_pass');
  }
  public set smtpPass(value: string) {
    this._smtpPass = value;
  }
  public resetSmtpPass() {
    this._smtpPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPassInput() {
    return this._smtpPass;
  }

  // smtp_port - computed: false, optional: true, required: false
  private _smtpPort?: number; 
  public get smtpPort() {
    return this.getNumberAttribute('smtp_port');
  }
  public set smtpPort(value: number) {
    this._smtpPort = value;
  }
  public resetSmtpPort() {
    this._smtpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPortInput() {
    return this._smtpPort;
  }

  // smtp_user - computed: false, optional: true, required: false
  private _smtpUser?: string; 
  public get smtpUser() {
    return this.getStringAttribute('smtp_user');
  }
  public set smtpUser(value: string) {
    this._smtpUser = value;
  }
  public resetSmtpUser() {
    this._smtpUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpUserInput() {
    return this._smtpUser;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email auth0_email}
*/
export class Email extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Email resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Email to import
  * @param importFromId The id of the existing Email that should be imported. Refer to the {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Email to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email auth0_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailConfig
  */
  public constructor(scope: Construct, id: string, config: EmailConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_email',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '0.26.2',
        providerVersionConstraint: '0.26.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultFromAddress = config.defaultFromAddress;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_from_address - computed: false, optional: false, required: true
  private _defaultFromAddress?: string; 
  public get defaultFromAddress() {
    return this.getStringAttribute('default_from_address');
  }
  public set defaultFromAddress(value: string) {
    this._defaultFromAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFromAddressInput() {
    return this._defaultFromAddress;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // credentials - computed: false, optional: false, required: true
  private _credentials = new EmailCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: EmailCredentials) {
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
      default_from_address: cdktf.stringToTerraform(this._defaultFromAddress),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      credentials: emailCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_from_address: {
        value: cdktf.stringToHclTerraform(this._defaultFromAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      credentials: {
        value: emailCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
