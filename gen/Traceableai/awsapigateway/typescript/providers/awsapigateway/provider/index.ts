// https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsapigatewayProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs#profile AwsapigatewayProvider#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs#region AwsapigatewayProvider#region}
  */
  readonly region?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs#alias AwsapigatewayProvider#alias}
  */
  readonly alias?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs#assume_role AwsapigatewayProvider#assume_role}
  */
  readonly assumeRole?: AwsapigatewayProviderAssumeRole;
}
export interface AwsapigatewayProviderAssumeRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs#role_arn AwsapigatewayProvider#role_arn}
  */
  readonly roleArn: string;
}

export function awsapigatewayProviderAssumeRoleToTerraform(struct?: AwsapigatewayProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function awsapigatewayProviderAssumeRoleToHclTerraform(struct?: AwsapigatewayProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs awsapigateway}
*/
export class AwsapigatewayProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsapigateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsapigatewayProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsapigatewayProvider to import
  * @param importFromId The id of the existing AwsapigatewayProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsapigatewayProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsapigateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/traceableai/awsapigateway/0.7.0/docs awsapigateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsapigatewayProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsapigatewayProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awsapigateway',
      terraformGeneratorMetadata: {
        providerName: 'awsapigateway',
        providerVersion: '0.7.0'
      },
      terraformProviderSource: 'Traceableai/awsapigateway'
    });
    this._profile = config.profile;
    this._region = config.region;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

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

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: AwsapigatewayProviderAssumeRole; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AwsapigatewayProviderAssumeRole | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      profile: cdktf.stringToTerraform(this._profile),
      region: cdktf.stringToTerraform(this._region),
      alias: cdktf.stringToTerraform(this._alias),
      assume_role: awsapigatewayProviderAssumeRoleToTerraform(this._assumeRole),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
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
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role: {
        value: awsapigatewayProviderAssumeRoleToHclTerraform(this._assumeRole),
        isBlock: true,
        type: "list",
        storageClassType: "AwsapigatewayProviderAssumeRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
