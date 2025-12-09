// https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection#github_app Connection#github_app}
  */
  readonly githubApp: ConnectionGithubApp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection#project_id Connection#project_id}
  */
  readonly projectId: string;
}
export interface ConnectionGithubApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection#app_id Connection#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection#client_id Connection#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection#client_secret Connection#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection#display_name Connection#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection#owner_url Connection#owner_url}
  */
  readonly ownerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection#private_key Connection#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection#webhook_secret Connection#webhook_secret}
  */
  readonly webhookSecret: string;
}

export function connectionGithubAppToTerraform(struct?: ConnectionGithubApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    owner_url: cdktf.stringToTerraform(struct!.ownerUrl),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    webhook_secret: cdktf.stringToTerraform(struct!.webhookSecret),
  }
}


export function connectionGithubAppToHclTerraform(struct?: ConnectionGithubApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
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
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_url: {
      value: cdktf.stringToHclTerraform(struct!.ownerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_secret: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionGithubAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionGithubApp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._ownerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUrl = this._ownerUrl;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._webhookSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecret = this._webhookSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionGithubApp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._displayName = undefined;
      this._ownerUrl = undefined;
      this._privateKey = undefined;
      this._webhookSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._displayName = value.displayName;
      this._ownerUrl = value.ownerUrl;
      this._privateKey = value.privateKey;
      this._webhookSecret = value.webhookSecret;
    }
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // owner_url - computed: false, optional: false, required: true
  private _ownerUrl?: string; 
  public get ownerUrl() {
    return this.getStringAttribute('owner_url');
  }
  public set ownerUrl(value: string) {
    this._ownerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUrlInput() {
    return this._ownerUrl;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // webhook_secret - computed: false, optional: false, required: true
  private _webhookSecret?: string; 
  public get webhookSecret() {
    return this.getStringAttribute('webhook_secret');
  }
  public set webhookSecret(value: string) {
    this._webhookSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretInput() {
    return this._webhookSecret;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection teamcity_connection}
*/
export class Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "teamcity_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connection to import
  * @param importFromId The id of the existing Connection that should be imported. Refer to the {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "teamcity_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/connection teamcity_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'teamcity_connection',
      terraformGeneratorMetadata: {
        providerName: 'teamcity',
        providerVersion: '0.0.87',
        providerVersionConstraint: '0.0.87'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._githubApp.internalValue = config.githubApp;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature_id - computed: true, optional: false, required: false
  public get featureId() {
    return this.getStringAttribute('feature_id');
  }

  // github_app - computed: false, optional: false, required: true
  private _githubApp = new ConnectionGithubAppOutputReference(this, "github_app");
  public get githubApp() {
    return this._githubApp;
  }
  public putGithubApp(value: ConnectionGithubApp) {
    this._githubApp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppInput() {
    return this._githubApp.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      github_app: connectionGithubAppToTerraform(this._githubApp.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      github_app: {
        value: connectionGithubAppToHclTerraform(this._githubApp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectionGithubApp",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
