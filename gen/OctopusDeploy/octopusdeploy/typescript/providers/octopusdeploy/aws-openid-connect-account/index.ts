// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsOpenidConnectAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Keys to include in an account test. Valid options are: `space`, `account`, `type`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#account_test_subject_keys AwsOpenidConnectAccount#account_test_subject_keys}
  */
  readonly accountTestSubjectKeys?: string[];
  /**
  * A user-friendly description of this AWS OIDC account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#description AwsOpenidConnectAccount#description}
  */
  readonly description?: string;
  /**
  * A list of environment IDs associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#environments AwsOpenidConnectAccount#environments}
  */
  readonly environments?: string[];
  /**
  * Keys to include in a deployment or runbook. Valid options are `space`, `environment`, `project`, `tenant`, `runbook`, `account`, `type`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#execution_subject_keys AwsOpenidConnectAccount#execution_subject_keys}
  */
  readonly executionSubjectKeys?: string[];
  /**
  * Keys to include in a health check. Valid options are `space`, `account`, `target`, `type`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#health_subject_keys AwsOpenidConnectAccount#health_subject_keys}
  */
  readonly healthSubjectKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#id AwsOpenidConnectAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this AWS OIDC account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#name AwsOpenidConnectAccount#name}
  */
  readonly name: string;
  /**
  * The Amazon Resource Name (ARN) of the role that the caller is assuming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#role_arn AwsOpenidConnectAccount#role_arn}
  */
  readonly roleArn: string;
  /**
  * The duration, in seconds, of the role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#session_duration AwsOpenidConnectAccount#session_duration}
  */
  readonly sessionDuration?: number;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#space_id AwsOpenidConnectAccount#space_id}
  */
  readonly spaceId?: string;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#tenant_tags AwsOpenidConnectAccount#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or `Tenanted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#tenanted_deployment_participation AwsOpenidConnectAccount#tenanted_deployment_participation}
  */
  readonly tenantedDeploymentParticipation?: string;
  /**
  * A list of tenant IDs associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#tenants AwsOpenidConnectAccount#tenants}
  */
  readonly tenants?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account octopusdeploy_aws_openid_connect_account}
*/
export class AwsOpenidConnectAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_aws_openid_connect_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsOpenidConnectAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsOpenidConnectAccount to import
  * @param importFromId The id of the existing AwsOpenidConnectAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsOpenidConnectAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_aws_openid_connect_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/aws_openid_connect_account octopusdeploy_aws_openid_connect_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsOpenidConnectAccountConfig
  */
  public constructor(scope: Construct, id: string, config: AwsOpenidConnectAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_aws_openid_connect_account',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
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
    this._environments = config.environments;
    this._executionSubjectKeys = config.executionSubjectKeys;
    this._healthSubjectKeys = config.healthSubjectKeys;
    this._id = config.id;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._sessionDuration = config.sessionDuration;
    this._spaceId = config.spaceId;
    this._tenantTags = config.tenantTags;
    this._tenantedDeploymentParticipation = config.tenantedDeploymentParticipation;
    this._tenants = config.tenants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_test_subject_keys - computed: false, optional: true, required: false
  private _accountTestSubjectKeys?: string[]; 
  public get accountTestSubjectKeys() {
    return this.getListAttribute('account_test_subject_keys');
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

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // execution_subject_keys - computed: false, optional: true, required: false
  private _executionSubjectKeys?: string[]; 
  public get executionSubjectKeys() {
    return this.getListAttribute('execution_subject_keys');
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
    return this.getListAttribute('health_subject_keys');
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

  // session_duration - computed: false, optional: true, required: false
  private _sessionDuration?: number; 
  public get sessionDuration() {
    return this.getNumberAttribute('session_duration');
  }
  public set sessionDuration(value: number) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
  }
  public set tenantTags(value: string[]) {
    this._tenantTags = value;
  }
  public resetTenantTags() {
    this._tenantTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantTagsInput() {
    return this._tenantTags;
  }

  // tenanted_deployment_participation - computed: true, optional: true, required: false
  private _tenantedDeploymentParticipation?: string; 
  public get tenantedDeploymentParticipation() {
    return this.getStringAttribute('tenanted_deployment_participation');
  }
  public set tenantedDeploymentParticipation(value: string) {
    this._tenantedDeploymentParticipation = value;
  }
  public resetTenantedDeploymentParticipation() {
    this._tenantedDeploymentParticipation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantedDeploymentParticipationInput() {
    return this._tenantedDeploymentParticipation;
  }

  // tenants - computed: true, optional: true, required: false
  private _tenants?: string[]; 
  public get tenants() {
    return this.getListAttribute('tenants');
  }
  public set tenants(value: string[]) {
    this._tenants = value;
  }
  public resetTenants() {
    this._tenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_test_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountTestSubjectKeys),
      description: cdktf.stringToTerraform(this._description),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      execution_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._executionSubjectKeys),
      health_subject_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthSubjectKeys),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      session_duration: cdktf.numberToTerraform(this._sessionDuration),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
      tenanted_deployment_participation: cdktf.stringToTerraform(this._tenantedDeploymentParticipation),
      tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenants),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_test_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountTestSubjectKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      execution_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._executionSubjectKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      health_subject_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthSubjectKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_duration: {
        value: cdktf.numberToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tenanted_deployment_participation: {
        value: cdktf.stringToHclTerraform(this._tenantedDeploymentParticipation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenants),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
