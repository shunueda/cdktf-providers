// https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsExtensionProviderConfig {
  /**
  * The region where the oidc provider will be updated. Defaults to us-east-1 if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs#region AwsExtensionProvider#region}
  */
  readonly region?: string;
  /**
  * The ARN of the role to be assumed for this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs#role_arn AwsExtensionProvider#role_arn}
  */
  readonly roleArn: string;
  /**
  * Session name which will be set for the assumed role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs#session_name AwsExtensionProvider#session_name}
  */
  readonly sessionName: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs#alias AwsExtensionProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs aws-extension}
*/
export class AwsExtensionProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws-extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsExtensionProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsExtensionProvider to import
  * @param importFromId The id of the existing AwsExtensionProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsExtensionProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws-extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/blackdark/aws-extension/0.6.0/docs aws-extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsExtensionProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AwsExtensionProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws-extension',
      terraformGeneratorMetadata: {
        providerName: 'aws-extension',
        providerVersion: '0.6.0'
      },
      terraformProviderSource: 'BlackDark/aws-extension'
    });
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._sessionName = config.sessionName;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string | undefined) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // session_name - computed: false, optional: false, required: true
  private _sessionName?: string; 
  public get sessionName() {
    return this._sessionName;
  }
  public set sessionName(value: string | undefined) {
    this._sessionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
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
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      session_name: cdktf.stringToTerraform(this._sessionName),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_name: {
        value: cdktf.stringToHclTerraform(this._sessionName),
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
