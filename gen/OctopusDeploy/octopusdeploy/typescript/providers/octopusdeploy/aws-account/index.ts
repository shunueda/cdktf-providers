// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access key associated with this AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account#access_key AwsAccount#access_key}
  */
  readonly accessKey: string;
  /**
  * The description of this AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account#description AwsAccount#description}
  */
  readonly description?: string;
  /**
  * A list of environment IDs associated with this AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account#environments AwsAccount#environments}
  */
  readonly environments?: string[];
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account#name AwsAccount#name}
  */
  readonly name: string;
  /**
  * The secret key associated with this AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account#secret_key AwsAccount#secret_key}
  */
  readonly secretKey: string;
  /**
  * The space ID associated with this AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account#space_id AwsAccount#space_id}
  */
  readonly spaceId?: string;
  /**
  * A list of tenant tags associated with this AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account#tenant_tags AwsAccount#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or `Tenanted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account#tenanted_deployment_participation AwsAccount#tenanted_deployment_participation}
  */
  readonly tenantedDeploymentParticipation?: string;
  /**
  * A list of tenant IDs associated with this AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account#tenants AwsAccount#tenants}
  */
  readonly tenants?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account octopusdeploy_aws_account}
*/
export class AwsAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_aws_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAccount to import
  * @param importFromId The id of the existing AwsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_aws_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/aws_account octopusdeploy_aws_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAccountConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_aws_account',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.4.0'
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
    this._description = config.description;
    this._environments = config.environments;
    this._name = config.name;
    this._secretKey = config.secretKey;
    this._spaceId = config.spaceId;
    this._tenantTags = config.tenantTags;
    this._tenantedDeploymentParticipation = config.tenantedDeploymentParticipation;
    this._tenants = config.tenants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
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

  // environments - computed: false, optional: true, required: false
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

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
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
      access_key: cdktf.stringToTerraform(this._accessKey),
      description: cdktf.stringToTerraform(this._description),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      name: cdktf.stringToTerraform(this._name),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
      tenanted_deployment_participation: cdktf.stringToTerraform(this._tenantedDeploymentParticipation),
      tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenants),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
