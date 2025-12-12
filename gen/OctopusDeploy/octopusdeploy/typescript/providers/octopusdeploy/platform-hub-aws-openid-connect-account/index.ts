// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_aws_openid_connect_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformHubAwsOpenidConnectAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Keys to include in an account test. Valid options are `space`, `account`, `type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_aws_openid_connect_account#account_test_subject_keys PlatformHubAwsOpenidConnectAccount#account_test_subject_keys}
  */
  readonly accountTestSubjectKeys?: string[];
  /**
  * A user-friendly description of this Platform Hub AWS OIDC account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_aws_openid_connect_account#description PlatformHubAwsOpenidConnectAccount#description}
  */
  readonly description?: string;
  /**
  * Keys to include in a deployment or runbook. Valid options are `space`, `environment`, `project`, `tenant`, `runbook`, `account`, `type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_aws_openid_connect_account#execution_subject_keys PlatformHubAwsOpenidConnectAccount#execution_subject_keys}
  */
  readonly executionSubjectKeys?: string[];
  /**
  * Keys to include in a health check. Valid options are `space`, `account`, `target`, `type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_aws_openid_connect_account#health_subject_keys PlatformHubAwsOpenidConnectAccount#health_subject_keys}
  */
  readonly healthSubjectKeys?: string[];
  /**
  * The name of this Platform Hub AWS OIDC account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_aws_openid_connect_account#name PlatformHubAwsOpenidConnectAccount#name}
  */
  readonly name: string;
  /**
  * The Amazon Resource Name (ARN) of the role that the caller is assuming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_aws_openid_connect_account#role_arn PlatformHubAwsOpenidConnectAccount#role_arn}
  */
  readonly roleArn: string;
  /**
  * The duration, in seconds, of the role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_aws_openid_connect_account#session_duration PlatformHubAwsOpenidConnectAccount#session_duration}
  */
  readonly sessionDuration?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_aws_openid_connect_account octopusdeploy_platform_hub_aws_openid_connect_account}
*/
export class PlatformHubAwsOpenidConnectAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_platform_hub_aws_openid_connect_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformHubAwsOpenidConnectAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformHubAwsOpenidConnectAccount to import
  * @param importFromId The id of the existing PlatformHubAwsOpenidConnectAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_aws_openid_connect_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformHubAwsOpenidConnectAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_platform_hub_aws_openid_connect_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/platform_hub_aws_openid_connect_account octopusdeploy_platform_hub_aws_openid_connect_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformHubAwsOpenidConnectAccountConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformHubAwsOpenidConnectAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_platform_hub_aws_openid_connect_account',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountTestSubjectKeys = config.accountTestSubjectKeys;
    this._description = config.description;
    this._executionSubjectKeys = config.executionSubjectKeys;
    this._healthSubjectKeys = config.healthSubjectKeys;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._sessionDuration = config.sessionDuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_test_subject_keys - computed: false, optional: true, required: false
  private _accountTestSubjectKeys?: string[]; 
  public get accountTestSubjectKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('account_test_subject_keys'));
  }
  public set accountTestSubjectKeys(value: string[]) {
    this._accountTestSubjectKeys = value;
  }
  public resetAccountTestSubjectKeys() {
    this._accountTestSubjectKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTestSubjectKeysInput() {
    return this._accountTestSubjectKeys;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // execution_subject_keys - computed: false, optional: true, required: false
  private _executionSubjectKeys?: string[]; 
  public get executionSubjectKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('execution_subject_keys'));
  }
  public set executionSubjectKeys(value: string[]) {
    this._executionSubjectKeys = value;
  }
  public resetExecutionSubjectKeys() {
    this._executionSubjectKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionSubjectKeysInput() {
    return this._executionSubjectKeys;
  }

  // health_subject_keys - computed: false, optional: true, required: false
  private _healthSubjectKeys?: string[]; 
  public get healthSubjectKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('health_subject_keys'));
  }
  public set healthSubjectKeys(value: string[]) {
    this._healthSubjectKeys = value;
  }
  public resetHealthSubjectKeys() {
    this._healthSubjectKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthSubjectKeysInput() {
    return this._healthSubjectKeys;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // session_duration - computed: true, optional: true, required: false
  private _sessionDuration?: string; 
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_test_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountTestSubjectKeys),
      description: cdktf.stringToTerraform(this._description),
      execution_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._executionSubjectKeys),
      health_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthSubjectKeys),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_test_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountTestSubjectKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._executionSubjectKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      health_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthSubjectKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      session_duration: {
        value: cdktf.stringToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
