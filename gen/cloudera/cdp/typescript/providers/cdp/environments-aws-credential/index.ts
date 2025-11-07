// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_aws_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentsAwsCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_aws_credential#credential_name EnvironmentsAwsCredential#credential_name}
  */
  readonly credentialName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_aws_credential#description EnvironmentsAwsCredential#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_aws_credential#role_arn EnvironmentsAwsCredential#role_arn}
  */
  readonly roleArn: string;
  /**
  * Whether to skip organizational policy decision checks or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_aws_credential#skip_org_policy_decisions EnvironmentsAwsCredential#skip_org_policy_decisions}
  */
  readonly skipOrgPolicyDecisions?: boolean | cdktf.IResolvable;
  /**
  * Whether to verify permissions upon saving or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_aws_credential#verify_permissions EnvironmentsAwsCredential#verify_permissions}
  */
  readonly verifyPermissions?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_aws_credential cdp_environments_aws_credential}
*/
export class EnvironmentsAwsCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_environments_aws_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentsAwsCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentsAwsCredential to import
  * @param importFromId The id of the existing EnvironmentsAwsCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_aws_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentsAwsCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_environments_aws_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_aws_credential cdp_environments_aws_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentsAwsCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentsAwsCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_environments_aws_credential',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialName = config.credentialName;
    this._description = config.description;
    this._roleArn = config.roleArn;
    this._skipOrgPolicyDecisions = config.skipOrgPolicyDecisions;
    this._verifyPermissions = config.verifyPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_name - computed: false, optional: false, required: true
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
  }

  // description - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // skip_org_policy_decisions - computed: true, optional: true, required: false
  private _skipOrgPolicyDecisions?: boolean | cdktf.IResolvable; 
  public get skipOrgPolicyDecisions() {
    return this.getBooleanAttribute('skip_org_policy_decisions');
  }
  public set skipOrgPolicyDecisions(value: boolean | cdktf.IResolvable) {
    this._skipOrgPolicyDecisions = value;
  }
  public resetSkipOrgPolicyDecisions() {
    this._skipOrgPolicyDecisions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOrgPolicyDecisionsInput() {
    return this._skipOrgPolicyDecisions;
  }

  // verify_permissions - computed: true, optional: true, required: false
  private _verifyPermissions?: boolean | cdktf.IResolvable; 
  public get verifyPermissions() {
    return this.getBooleanAttribute('verify_permissions');
  }
  public set verifyPermissions(value: boolean | cdktf.IResolvable) {
    this._verifyPermissions = value;
  }
  public resetVerifyPermissions() {
    this._verifyPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyPermissionsInput() {
    return this._verifyPermissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_name: cdktf.stringToTerraform(this._credentialName),
      description: cdktf.stringToTerraform(this._description),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      skip_org_policy_decisions: cdktf.booleanToTerraform(this._skipOrgPolicyDecisions),
      verify_permissions: cdktf.booleanToTerraform(this._verifyPermissions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_name: {
        value: cdktf.stringToHclTerraform(this._credentialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      skip_org_policy_decisions: {
        value: cdktf.booleanToHclTerraform(this._skipOrgPolicyDecisions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      verify_permissions: {
        value: cdktf.booleanToHclTerraform(this._verifyPermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
