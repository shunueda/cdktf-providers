// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email address to use as the sender when no other "from" address is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#default_from_address EmailProvider#default_from_address}
  */
  readonly defaultFromAddress: string;
  /**
  * Indicates whether the email provider is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#enabled EmailProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#id EmailProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the email provider. Options include `azure_cs`, `custom`, `mailgun`, `mandrill`, `ms365`, `sendgrid`, `ses`, `smtp` and `sparkpost`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#name EmailProvider#name}
  */
  readonly name: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#credentials EmailProvider#credentials}
  */
  readonly credentials: EmailProviderCredentials;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#settings EmailProvider#settings}
  */
  readonly settings?: EmailProviderSettings;
}
export interface EmailProviderCredentials {
  /**
  * AWS Access Key ID. Used only for AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#access_key_id EmailProvider#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * API Key for your email service. Will always be encrypted in our database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#api_key EmailProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Azure Communication Services Connection String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#azure_cs_connection_string EmailProvider#azure_cs_connection_string}
  */
  readonly azureCsConnectionString?: string;
  /**
  * Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#domain EmailProvider#domain}
  */
  readonly domain?: string;
  /**
  * Microsoft 365 Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#ms365_client_id EmailProvider#ms365_client_id}
  */
  readonly ms365ClientId?: string;
  /**
  * Microsoft 365 Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#ms365_client_secret EmailProvider#ms365_client_secret}
  */
  readonly ms365ClientSecret?: string;
  /**
  * Microsoft 365 Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#ms365_tenant_id EmailProvider#ms365_tenant_id}
  */
  readonly ms365TenantId?: string;
  /**
  * Default region. Used only for AWS, Mailgun, and SparkPost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#region EmailProvider#region}
  */
  readonly region?: string;
  /**
  * AWS Secret Key. Will always be encrypted in our database. Used only for AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#secret_access_key EmailProvider#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Hostname or IP address of your SMTP server. Used only for SMTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#smtp_host EmailProvider#smtp_host}
  */
  readonly smtpHost?: string;
  /**
  * SMTP password. Used only for SMTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#smtp_pass EmailProvider#smtp_pass}
  */
  readonly smtpPass?: string;
  /**
  * Port used by your SMTP server. Please avoid using port 25 if possible because many providers have limitations on this port. Used only for SMTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#smtp_port EmailProvider#smtp_port}
  */
  readonly smtpPort?: number;
  /**
  * SMTP username. Used only for SMTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#smtp_user EmailProvider#smtp_user}
  */
  readonly smtpUser?: string;
}

export function emailProviderCredentialsToTerraform(struct?: EmailProviderCredentialsOutputReference | EmailProviderCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    azure_cs_connection_string: cdktf.stringToTerraform(struct!.azureCsConnectionString),
    domain: cdktf.stringToTerraform(struct!.domain),
    ms365_client_id: cdktf.stringToTerraform(struct!.ms365ClientId),
    ms365_client_secret: cdktf.stringToTerraform(struct!.ms365ClientSecret),
    ms365_tenant_id: cdktf.stringToTerraform(struct!.ms365TenantId),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    smtp_host: cdktf.stringToTerraform(struct!.smtpHost),
    smtp_pass: cdktf.stringToTerraform(struct!.smtpPass),
    smtp_port: cdktf.numberToTerraform(struct!.smtpPort),
    smtp_user: cdktf.stringToTerraform(struct!.smtpUser),
  }
}


export function emailProviderCredentialsToHclTerraform(struct?: EmailProviderCredentialsOutputReference | EmailProviderCredentials): any {
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
    azure_cs_connection_string: {
      value: cdktf.stringToHclTerraform(struct!.azureCsConnectionString),
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
    ms365_client_id: {
      value: cdktf.stringToHclTerraform(struct!.ms365ClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ms365_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.ms365ClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ms365_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.ms365TenantId),
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

export class EmailProviderCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailProviderCredentials | undefined {
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
    if (this._azureCsConnectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCsConnectionString = this._azureCsConnectionString;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._ms365ClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ms365ClientId = this._ms365ClientId;
    }
    if (this._ms365ClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.ms365ClientSecret = this._ms365ClientSecret;
    }
    if (this._ms365TenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ms365TenantId = this._ms365TenantId;
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

  public set internalValue(value: EmailProviderCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._apiKey = undefined;
      this._azureCsConnectionString = undefined;
      this._domain = undefined;
      this._ms365ClientId = undefined;
      this._ms365ClientSecret = undefined;
      this._ms365TenantId = undefined;
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
      this._azureCsConnectionString = value.azureCsConnectionString;
      this._domain = value.domain;
      this._ms365ClientId = value.ms365ClientId;
      this._ms365ClientSecret = value.ms365ClientSecret;
      this._ms365TenantId = value.ms365TenantId;
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

  // azure_cs_connection_string - computed: false, optional: true, required: false
  private _azureCsConnectionString?: string; 
  public get azureCsConnectionString() {
    return this.getStringAttribute('azure_cs_connection_string');
  }
  public set azureCsConnectionString(value: string) {
    this._azureCsConnectionString = value;
  }
  public resetAzureCsConnectionString() {
    this._azureCsConnectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCsConnectionStringInput() {
    return this._azureCsConnectionString;
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

  // ms365_client_id - computed: false, optional: true, required: false
  private _ms365ClientId?: string; 
  public get ms365ClientId() {
    return this.getStringAttribute('ms365_client_id');
  }
  public set ms365ClientId(value: string) {
    this._ms365ClientId = value;
  }
  public resetMs365ClientId() {
    this._ms365ClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ms365ClientIdInput() {
    return this._ms365ClientId;
  }

  // ms365_client_secret - computed: false, optional: true, required: false
  private _ms365ClientSecret?: string; 
  public get ms365ClientSecret() {
    return this.getStringAttribute('ms365_client_secret');
  }
  public set ms365ClientSecret(value: string) {
    this._ms365ClientSecret = value;
  }
  public resetMs365ClientSecret() {
    this._ms365ClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ms365ClientSecretInput() {
    return this._ms365ClientSecret;
  }

  // ms365_tenant_id - computed: false, optional: true, required: false
  private _ms365TenantId?: string; 
  public get ms365TenantId() {
    return this.getStringAttribute('ms365_tenant_id');
  }
  public set ms365TenantId(value: string) {
    this._ms365TenantId = value;
  }
  public resetMs365TenantId() {
    this._ms365TenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ms365TenantIdInput() {
    return this._ms365TenantId;
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
export interface EmailProviderSettingsHeaders {
  /**
  * Disable or enable the default View Content Link for sensitive emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#x_mc_view_content_link EmailProvider#x_mc_view_content_link}
  */
  readonly xMcViewContentLink?: string;
  /**
  * SES Configuration set to include when sending emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#x_ses_configuration_set EmailProvider#x_ses_configuration_set}
  */
  readonly xSesConfigurationSet?: string;
}

export function emailProviderSettingsHeadersToTerraform(struct?: EmailProviderSettingsHeadersOutputReference | EmailProviderSettingsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x_mc_view_content_link: cdktf.stringToTerraform(struct!.xMcViewContentLink),
    x_ses_configuration_set: cdktf.stringToTerraform(struct!.xSesConfigurationSet),
  }
}


export function emailProviderSettingsHeadersToHclTerraform(struct?: EmailProviderSettingsHeadersOutputReference | EmailProviderSettingsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x_mc_view_content_link: {
      value: cdktf.stringToHclTerraform(struct!.xMcViewContentLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_ses_configuration_set: {
      value: cdktf.stringToHclTerraform(struct!.xSesConfigurationSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailProviderSettingsHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailProviderSettingsHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xMcViewContentLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.xMcViewContentLink = this._xMcViewContentLink;
    }
    if (this._xSesConfigurationSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.xSesConfigurationSet = this._xSesConfigurationSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailProviderSettingsHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xMcViewContentLink = undefined;
      this._xSesConfigurationSet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xMcViewContentLink = value.xMcViewContentLink;
      this._xSesConfigurationSet = value.xSesConfigurationSet;
    }
  }

  // x_mc_view_content_link - computed: false, optional: true, required: false
  private _xMcViewContentLink?: string; 
  public get xMcViewContentLink() {
    return this.getStringAttribute('x_mc_view_content_link');
  }
  public set xMcViewContentLink(value: string) {
    this._xMcViewContentLink = value;
  }
  public resetXMcViewContentLink() {
    this._xMcViewContentLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xMcViewContentLinkInput() {
    return this._xMcViewContentLink;
  }

  // x_ses_configuration_set - computed: false, optional: true, required: false
  private _xSesConfigurationSet?: string; 
  public get xSesConfigurationSet() {
    return this.getStringAttribute('x_ses_configuration_set');
  }
  public set xSesConfigurationSet(value: string) {
    this._xSesConfigurationSet = value;
  }
  public resetXSesConfigurationSet() {
    this._xSesConfigurationSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xSesConfigurationSetInput() {
    return this._xSesConfigurationSet;
  }
}
export interface EmailProviderSettingsMessage {
  /**
  * Setting for the `ses` email provider. The name of the configuration set to apply to the sent emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#configuration_set_name EmailProvider#configuration_set_name}
  */
  readonly configurationSetName?: string;
  /**
  * Setting for the `mandrill` email provider. Set to `true` to see the content of individual emails sent to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#view_content_link EmailProvider#view_content_link}
  */
  readonly viewContentLink?: boolean | cdktf.IResolvable;
}

export function emailProviderSettingsMessageToTerraform(struct?: EmailProviderSettingsMessageOutputReference | EmailProviderSettingsMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_set_name: cdktf.stringToTerraform(struct!.configurationSetName),
    view_content_link: cdktf.booleanToTerraform(struct!.viewContentLink),
  }
}


export function emailProviderSettingsMessageToHclTerraform(struct?: EmailProviderSettingsMessageOutputReference | EmailProviderSettingsMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_set_name: {
      value: cdktf.stringToHclTerraform(struct!.configurationSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_content_link: {
      value: cdktf.booleanToHclTerraform(struct!.viewContentLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailProviderSettingsMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailProviderSettingsMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationSetName = this._configurationSetName;
    }
    if (this._viewContentLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewContentLink = this._viewContentLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailProviderSettingsMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationSetName = undefined;
      this._viewContentLink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationSetName = value.configurationSetName;
      this._viewContentLink = value.viewContentLink;
    }
  }

  // configuration_set_name - computed: false, optional: true, required: false
  private _configurationSetName?: string; 
  public get configurationSetName() {
    return this.getStringAttribute('configuration_set_name');
  }
  public set configurationSetName(value: string) {
    this._configurationSetName = value;
  }
  public resetConfigurationSetName() {
    this._configurationSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetNameInput() {
    return this._configurationSetName;
  }

  // view_content_link - computed: false, optional: true, required: false
  private _viewContentLink?: boolean | cdktf.IResolvable; 
  public get viewContentLink() {
    return this.getBooleanAttribute('view_content_link');
  }
  public set viewContentLink(value: boolean | cdktf.IResolvable) {
    this._viewContentLink = value;
  }
  public resetViewContentLink() {
    this._viewContentLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewContentLinkInput() {
    return this._viewContentLink;
  }
}
export interface EmailProviderSettings {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#headers EmailProvider#headers}
  */
  readonly headers?: EmailProviderSettingsHeaders;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#message EmailProvider#message}
  */
  readonly message?: EmailProviderSettingsMessage;
}

export function emailProviderSettingsToTerraform(struct?: EmailProviderSettingsOutputReference | EmailProviderSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: emailProviderSettingsHeadersToTerraform(struct!.headers),
    message: emailProviderSettingsMessageToTerraform(struct!.message),
  }
}


export function emailProviderSettingsToHclTerraform(struct?: EmailProviderSettingsOutputReference | EmailProviderSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: emailProviderSettingsHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "EmailProviderSettingsHeadersList",
    },
    message: {
      value: emailProviderSettingsMessageToHclTerraform(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "EmailProviderSettingsMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailProviderSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailProviderSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailProviderSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
      this._message.internalValue = value.message;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new EmailProviderSettingsHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: EmailProviderSettingsHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // message - computed: false, optional: true, required: false
  private _message = new EmailProviderSettingsMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }
  public putMessage(value: EmailProviderSettingsMessage) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider auth0_email_provider}
*/
export class EmailProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_email_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailProvider to import
  * @param importFromId The id of the existing EmailProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_email_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/email_provider auth0_email_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailProviderConfig
  */
  public constructor(scope: Construct, id: string, config: EmailProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_email_provider',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.36.0',
        providerVersionConstraint: '1.36.0'
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
    this._settings.internalValue = config.settings;
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
  private _credentials = new EmailProviderCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: EmailProviderCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new EmailProviderSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: EmailProviderSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
      credentials: emailProviderCredentialsToTerraform(this._credentials.internalValue),
      settings: emailProviderSettingsToTerraform(this._settings.internalValue),
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
        value: emailProviderCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailProviderCredentialsList",
      },
      settings: {
        value: emailProviderSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailProviderSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
