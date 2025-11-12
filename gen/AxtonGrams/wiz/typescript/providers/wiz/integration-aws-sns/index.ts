// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsSnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access method this integration should use. 
  *     - Allowed values: 
  *         - ASSUME_CONNECTOR_ROLE
  *         - ASSUME_SPECIFIED_ROLE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_access_method IntegrationAwsSns#aws_sns_access_method}
  */
  readonly awsSnsAccessMethod: string;
  /**
  * Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken.
  *     - Conflicts with `[aws_sns_customer_role_arn]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_connector_id IntegrationAwsSns#aws_sns_connector_id}
  */
  readonly awsSnsConnectorId?: string;
  /**
  * Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID).
  *     - Conflicts with `[aws_sns_connector_id]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_customer_role_arn IntegrationAwsSns#aws_sns_customer_role_arn}
  */
  readonly awsSnsCustomerRoleArn?: string;
  /**
  * The SNS Topic Arn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_topic_arn IntegrationAwsSns#aws_sns_topic_arn}
  */
  readonly awsSnsTopicArn?: string;
  /**
  * The name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#name IntegrationAwsSns#name}
  */
  readonly name: string;
  /**
  * The project this action is scoped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#project_id IntegrationAwsSns#project_id}
  */
  readonly projectId?: string;
  /**
  * Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. Other users will not be able to see it, use it, or view its results. Integrations restricted to global roles cannot be seen or used by users with Project-scoped roles. 
  *     - Allowed values: 
  *         - Selected Project
  *         - All Resources
  *         - All Resources, Restrict this Integration to global roles only
  * 
  *     - Defaults to `All Resources, Restrict this Integration to global roles only`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#scope IntegrationAwsSns#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns wiz_integration_aws_sns}
*/
export class IntegrationAwsSns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_integration_aws_sns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAwsSns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsSns to import
  * @param importFromId The id of the existing IntegrationAwsSns that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsSns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_integration_aws_sns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns wiz_integration_aws_sns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsSnsConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsSnsConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_integration_aws_sns',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5',
        providerVersionConstraint: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsSnsAccessMethod = config.awsSnsAccessMethod;
    this._awsSnsConnectorId = config.awsSnsConnectorId;
    this._awsSnsCustomerRoleArn = config.awsSnsCustomerRoleArn;
    this._awsSnsTopicArn = config.awsSnsTopicArn;
    this._name = config.name;
    this._projectId = config.projectId;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_sns_access_method - computed: false, optional: false, required: true
  private _awsSnsAccessMethod?: string; 
  public get awsSnsAccessMethod() {
    return this.getStringAttribute('aws_sns_access_method');
  }
  public set awsSnsAccessMethod(value: string) {
    this._awsSnsAccessMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSnsAccessMethodInput() {
    return this._awsSnsAccessMethod;
  }

  // aws_sns_connector_id - computed: false, optional: true, required: false
  private _awsSnsConnectorId?: string; 
  public get awsSnsConnectorId() {
    return this.getStringAttribute('aws_sns_connector_id');
  }
  public set awsSnsConnectorId(value: string) {
    this._awsSnsConnectorId = value;
  }
  public resetAwsSnsConnectorId() {
    this._awsSnsConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSnsConnectorIdInput() {
    return this._awsSnsConnectorId;
  }

  // aws_sns_customer_role_arn - computed: false, optional: true, required: false
  private _awsSnsCustomerRoleArn?: string; 
  public get awsSnsCustomerRoleArn() {
    return this.getStringAttribute('aws_sns_customer_role_arn');
  }
  public set awsSnsCustomerRoleArn(value: string) {
    this._awsSnsCustomerRoleArn = value;
  }
  public resetAwsSnsCustomerRoleArn() {
    this._awsSnsCustomerRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSnsCustomerRoleArnInput() {
    return this._awsSnsCustomerRoleArn;
  }

  // aws_sns_topic_arn - computed: false, optional: true, required: false
  private _awsSnsTopicArn?: string; 
  public get awsSnsTopicArn() {
    return this.getStringAttribute('aws_sns_topic_arn');
  }
  public set awsSnsTopicArn(value: string) {
    this._awsSnsTopicArn = value;
  }
  public resetAwsSnsTopicArn() {
    this._awsSnsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSnsTopicArnInput() {
    return this._awsSnsTopicArn;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_sns_access_method: cdktf.stringToTerraform(this._awsSnsAccessMethod),
      aws_sns_connector_id: cdktf.stringToTerraform(this._awsSnsConnectorId),
      aws_sns_customer_role_arn: cdktf.stringToTerraform(this._awsSnsCustomerRoleArn),
      aws_sns_topic_arn: cdktf.stringToTerraform(this._awsSnsTopicArn),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_sns_access_method: {
        value: cdktf.stringToHclTerraform(this._awsSnsAccessMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_sns_connector_id: {
        value: cdktf.stringToHclTerraform(this._awsSnsConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_sns_customer_role_arn: {
        value: cdktf.stringToHclTerraform(this._awsSnsCustomerRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_sns_topic_arn: {
        value: cdktf.stringToHclTerraform(this._awsSnsTopicArn),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
