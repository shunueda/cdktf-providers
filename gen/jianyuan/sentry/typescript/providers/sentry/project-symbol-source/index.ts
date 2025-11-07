// https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectSymbolSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS Access Key.Required for S3 sources, invalid for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#access_key ProjectSymbolSource#access_key}
  */
  readonly accessKey?: string;
  /**
  * The App Store Connect Issuer ID. Required for AppStoreConnect sources, invalid for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#app_connect_issuer ProjectSymbolSource#app_connect_issuer}
  */
  readonly appConnectIssuer?: string;
  /**
  * The App Store Connect API Private Key. Required for AppStoreConnect sources, invalid for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#app_connect_private_key ProjectSymbolSource#app_connect_private_key}
  */
  readonly appConnectPrivateKey?: string;
  /**
  * The App Store Connect App ID. Required for AppStoreConnect sources, invalid for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#app_id ProjectSymbolSource#app_id}
  */
  readonly appId?: string;
  /**
  * The GCS or S3 bucket where the source resides. Required for GCS and S3 sourcse, invalid for HTTP and AppStoreConnect sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#bucket ProjectSymbolSource#bucket}
  */
  readonly bucket?: string;
  /**
  * The GCS email address for authentication. Required for GCS sources, invalid for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#client_email ProjectSymbolSource#client_email}
  */
  readonly clientEmail?: string;
  /**
  * Layout settings for the source. This is required for HTTP, GCS, and S3 sources and invalid for AppStoreConnect sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#layout ProjectSymbolSource#layout}
  */
  readonly layout?: ProjectSymbolSourceLayout;
  /**
  * The human-readable name of the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#name ProjectSymbolSource#name}
  */
  readonly name: string;
  /**
  * The organization of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#organization ProjectSymbolSource#organization}
  */
  readonly organization: string;
  /**
  * The password for accessing the source. Optional for HTTP sources, invalid for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#password ProjectSymbolSource#password}
  */
  readonly password?: string;
  /**
  * The GCS or S3 prefix. Optional for GCS and S3 sourcse, invalid for HTTP and AppStoreConnect sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#prefix ProjectSymbolSource#prefix}
  */
  readonly prefix?: string;
  /**
  * The GCS private key. Required for GCS sources, invalid for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#private_key ProjectSymbolSource#private_key}
  */
  readonly privateKey?: string;
  /**
  * The project of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#project ProjectSymbolSource#project}
  */
  readonly project: string;
  /**
  * The source's S3 region. Required for S3 sources, invalid for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#region ProjectSymbolSource#region}
  */
  readonly region?: string;
  /**
  * The AWS Secret Access Key.Required for S3 sources, invalid for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#secret_key ProjectSymbolSource#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The type of symbol source. One of `appStoreConnect` (App Store Connect), `http` (SymbolServer (HTTP)), `gcs` (Google Cloud Storage), `s3` (Amazon S3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#type ProjectSymbolSource#type}
  */
  readonly type: string;
  /**
  * The source's URL. Optional for HTTP sources, invalid for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#url ProjectSymbolSource#url}
  */
  readonly url?: string;
  /**
  * The user name for accessing the source. Optional for HTTP sources, invalid for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#username ProjectSymbolSource#username}
  */
  readonly username?: string;
}
export interface ProjectSymbolSourceLayout {
  /**
  * The casing of the symbol source layout. The layout of the folder structure. The options are: `default` - Default (mixed case), `uppercase` - Uppercase, `lowercase` - Lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#casing ProjectSymbolSource#casing}
  */
  readonly casing: string;
  /**
  * The layout of the folder structure. The options are: `native` - Platform-Specific (SymStore / GDB / LLVM), `symstore` - Microsoft SymStore, `symstore_index2` - Microsoft SymStore (with index2.txt), `ssqp` - Microsoft SSQP, `unified` - Unified Symbol Server Layout, `debuginfod` - debuginfod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#type ProjectSymbolSource#type}
  */
  readonly type: string;
}

export function projectSymbolSourceLayoutToTerraform(struct?: ProjectSymbolSourceLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    casing: cdktf.stringToTerraform(struct!.casing),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function projectSymbolSourceLayoutToHclTerraform(struct?: ProjectSymbolSourceLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    casing: {
      value: cdktf.stringToHclTerraform(struct!.casing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSymbolSourceLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectSymbolSourceLayout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._casing !== undefined) {
      hasAnyValues = true;
      internalValueResult.casing = this._casing;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSymbolSourceLayout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._casing = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._casing = value.casing;
      this._type = value.type;
    }
  }

  // casing - computed: false, optional: false, required: true
  private _casing?: string; 
  public get casing() {
    return this.getStringAttribute('casing');
  }
  public set casing(value: string) {
    this._casing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get casingInput() {
    return this._casing;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source sentry_project_symbol_source}
*/
export class ProjectSymbolSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_project_symbol_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectSymbolSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectSymbolSource to import
  * @param importFromId The id of the existing ProjectSymbolSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectSymbolSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_project_symbol_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/project_symbol_source sentry_project_symbol_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectSymbolSourceConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectSymbolSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_project_symbol_source',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKey = config.accessKey;
    this._appConnectIssuer = config.appConnectIssuer;
    this._appConnectPrivateKey = config.appConnectPrivateKey;
    this._appId = config.appId;
    this._bucket = config.bucket;
    this._clientEmail = config.clientEmail;
    this._layout.internalValue = config.layout;
    this._name = config.name;
    this._organization = config.organization;
    this._password = config.password;
    this._prefix = config.prefix;
    this._privateKey = config.privateKey;
    this._project = config.project;
    this._region = config.region;
    this._secretKey = config.secretKey;
    this._type = config.type;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // app_connect_issuer - computed: false, optional: true, required: false
  private _appConnectIssuer?: string; 
  public get appConnectIssuer() {
    return this.getStringAttribute('app_connect_issuer');
  }
  public set appConnectIssuer(value: string) {
    this._appConnectIssuer = value;
  }
  public resetAppConnectIssuer() {
    this._appConnectIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appConnectIssuerInput() {
    return this._appConnectIssuer;
  }

  // app_connect_private_key - computed: false, optional: true, required: false
  private _appConnectPrivateKey?: string; 
  public get appConnectPrivateKey() {
    return this.getStringAttribute('app_connect_private_key');
  }
  public set appConnectPrivateKey(value: string) {
    this._appConnectPrivateKey = value;
  }
  public resetAppConnectPrivateKey() {
    this._appConnectPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appConnectPrivateKeyInput() {
    return this._appConnectPrivateKey;
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // client_email - computed: false, optional: true, required: false
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  public resetClientEmail() {
    this._clientEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // layout - computed: false, optional: true, required: false
  private _layout = new ProjectSymbolSourceLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: ProjectSymbolSourceLayout) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
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

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      app_connect_issuer: cdktf.stringToTerraform(this._appConnectIssuer),
      app_connect_private_key: cdktf.stringToTerraform(this._appConnectPrivateKey),
      app_id: cdktf.stringToTerraform(this._appId),
      bucket: cdktf.stringToTerraform(this._bucket),
      client_email: cdktf.stringToTerraform(this._clientEmail),
      layout: projectSymbolSourceLayoutToTerraform(this._layout.internalValue),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      password: cdktf.stringToTerraform(this._password),
      prefix: cdktf.stringToTerraform(this._prefix),
      private_key: cdktf.stringToTerraform(this._privateKey),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_connect_issuer: {
        value: cdktf.stringToHclTerraform(this._appConnectIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_connect_private_key: {
        value: cdktf.stringToHclTerraform(this._appConnectPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_email: {
        value: cdktf.stringToHclTerraform(this._clientEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layout: {
        value: projectSymbolSourceLayoutToHclTerraform(this._layout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectSymbolSourceLayout",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
