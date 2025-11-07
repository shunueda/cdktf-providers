// https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email address to use as `from` when no other address specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#default_from_address Email#default_from_address}
  */
  readonly defaultFromAddress: string;
  /**
  * Whether the provider is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#enabled Email#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#id Email#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * mailgun block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#mailgun Email#mailgun}
  */
  readonly mailgun?: EmailMailgun;
  /**
  * mandrill block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#mandrill Email#mandrill}
  */
  readonly mandrill?: EmailMandrill;
  /**
  * sendgrid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#sendgrid Email#sendgrid}
  */
  readonly sendgrid?: EmailSendgrid;
  /**
  * ses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#ses Email#ses}
  */
  readonly ses?: EmailSes;
  /**
  * smtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#smtp Email#smtp}
  */
  readonly smtp?: EmailSmtp;
  /**
  * sparkpost block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#sparkpost Email#sparkpost}
  */
  readonly sparkpost?: EmailSparkpost;
}
export interface EmailMailgun {
  /**
  * API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#api_key Email#api_key}
  */
  readonly apiKey: string;
  /**
  * Your Domain registered with Mailgun
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#domain Email#domain}
  */
  readonly domain: string;
  /**
  * Mailgun region. If set must be `eu`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#region Email#region}
  */
  readonly region?: string;
}

export function emailMailgunToTerraform(struct?: EmailMailgunOutputReference | EmailMailgun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    domain: cdktf.stringToTerraform(struct!.domain),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function emailMailgunToHclTerraform(struct?: EmailMailgunOutputReference | EmailMailgun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailMailgunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailMailgun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailMailgun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._domain = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._domain = value.domain;
      this._region = value.region;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
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
}
export interface EmailMandrill {
  /**
  * API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#api_key Email#api_key}
  */
  readonly apiKey: string;
}

export function emailMandrillToTerraform(struct?: EmailMandrillOutputReference | EmailMandrill): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}


export function emailMandrillToHclTerraform(struct?: EmailMandrillOutputReference | EmailMandrill): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailMandrillOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailMandrill | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailMandrill | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}
export interface EmailSendgrid {
  /**
  * API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#api_key Email#api_key}
  */
  readonly apiKey: string;
}

export function emailSendgridToTerraform(struct?: EmailSendgridOutputReference | EmailSendgrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}


export function emailSendgridToHclTerraform(struct?: EmailSendgridOutputReference | EmailSendgrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailSendgridOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailSendgrid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailSendgrid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}
export interface EmailSes {
  /**
  * Access key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#access_key_id Email#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Ses region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#region Email#region}
  */
  readonly region: string;
  /**
  * Secret Access key. It's not advisable to store it in clear
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#secret_access_key Email#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function emailSesToTerraform(struct?: EmailSesOutputReference | EmailSes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function emailSesToHclTerraform(struct?: EmailSesOutputReference | EmailSes): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailSesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailSes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailSes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface EmailSmtp {
  /**
  * SMTP Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#host Email#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#pass Email#pass}
  */
  readonly pass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#port Email#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#user Email#user}
  */
  readonly user: string;
}

export function emailSmtpToTerraform(struct?: EmailSmtpOutputReference | EmailSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    pass: cdktf.stringToTerraform(struct!.pass),
    port: cdktf.numberToTerraform(struct!.port),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function emailSmtpToHclTerraform(struct?: EmailSmtpOutputReference | EmailSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class EmailSmtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailSmtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailSmtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._pass = undefined;
      this._port = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._pass = value.pass;
      this._port = value.port;
      this._user = value.user;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // pass - computed: false, optional: false, required: true
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
export interface EmailSparkpost {
  /**
  * API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#api_key Email#api_key}
  */
  readonly apiKey: string;
  /**
  * Sparkpost region. If set must be `eu`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#region Email#region}
  */
  readonly region?: string;
}

export function emailSparkpostToTerraform(struct?: EmailSparkpostOutputReference | EmailSparkpost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function emailSparkpostToHclTerraform(struct?: EmailSparkpostOutputReference | EmailSparkpost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailSparkpostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailSparkpost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailSparkpost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._region = value.region;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email auth0_email}
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
  * @param importFromId The id of the existing Email that should be imported. Refer to the {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Email to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/email auth0_email} Resource
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
        providerVersion: '1.1.3'
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
    this._mailgun.internalValue = config.mailgun;
    this._mandrill.internalValue = config.mandrill;
    this._sendgrid.internalValue = config.sendgrid;
    this._ses.internalValue = config.ses;
    this._smtp.internalValue = config.smtp;
    this._sparkpost.internalValue = config.sparkpost;
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

  // mailgun - computed: false, optional: true, required: false
  private _mailgun = new EmailMailgunOutputReference(this, "mailgun");
  public get mailgun() {
    return this._mailgun;
  }
  public putMailgun(value: EmailMailgun) {
    this._mailgun.internalValue = value;
  }
  public resetMailgun() {
    this._mailgun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailgunInput() {
    return this._mailgun.internalValue;
  }

  // mandrill - computed: false, optional: true, required: false
  private _mandrill = new EmailMandrillOutputReference(this, "mandrill");
  public get mandrill() {
    return this._mandrill;
  }
  public putMandrill(value: EmailMandrill) {
    this._mandrill.internalValue = value;
  }
  public resetMandrill() {
    this._mandrill.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandrillInput() {
    return this._mandrill.internalValue;
  }

  // sendgrid - computed: false, optional: true, required: false
  private _sendgrid = new EmailSendgridOutputReference(this, "sendgrid");
  public get sendgrid() {
    return this._sendgrid;
  }
  public putSendgrid(value: EmailSendgrid) {
    this._sendgrid.internalValue = value;
  }
  public resetSendgrid() {
    this._sendgrid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendgridInput() {
    return this._sendgrid.internalValue;
  }

  // ses - computed: false, optional: true, required: false
  private _ses = new EmailSesOutputReference(this, "ses");
  public get ses() {
    return this._ses;
  }
  public putSes(value: EmailSes) {
    this._ses.internalValue = value;
  }
  public resetSes() {
    this._ses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesInput() {
    return this._ses.internalValue;
  }

  // smtp - computed: false, optional: true, required: false
  private _smtp = new EmailSmtpOutputReference(this, "smtp");
  public get smtp() {
    return this._smtp;
  }
  public putSmtp(value: EmailSmtp) {
    this._smtp.internalValue = value;
  }
  public resetSmtp() {
    this._smtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpInput() {
    return this._smtp.internalValue;
  }

  // sparkpost - computed: false, optional: true, required: false
  private _sparkpost = new EmailSparkpostOutputReference(this, "sparkpost");
  public get sparkpost() {
    return this._sparkpost;
  }
  public putSparkpost(value: EmailSparkpost) {
    this._sparkpost.internalValue = value;
  }
  public resetSparkpost() {
    this._sparkpost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkpostInput() {
    return this._sparkpost.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_from_address: cdktf.stringToTerraform(this._defaultFromAddress),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      mailgun: emailMailgunToTerraform(this._mailgun.internalValue),
      mandrill: emailMandrillToTerraform(this._mandrill.internalValue),
      sendgrid: emailSendgridToTerraform(this._sendgrid.internalValue),
      ses: emailSesToTerraform(this._ses.internalValue),
      smtp: emailSmtpToTerraform(this._smtp.internalValue),
      sparkpost: emailSparkpostToTerraform(this._sparkpost.internalValue),
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
      mailgun: {
        value: emailMailgunToHclTerraform(this._mailgun.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailMailgunList",
      },
      mandrill: {
        value: emailMandrillToHclTerraform(this._mandrill.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailMandrillList",
      },
      sendgrid: {
        value: emailSendgridToHclTerraform(this._sendgrid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailSendgridList",
      },
      ses: {
        value: emailSesToHclTerraform(this._ses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailSesList",
      },
      smtp: {
        value: emailSmtpToHclTerraform(this._smtp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailSmtpList",
      },
      sparkpost: {
        value: emailSparkpostToHclTerraform(this._sparkpost.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailSparkpostList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
