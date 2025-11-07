// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS access key identifier. (Cloudwatch)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#access_key_id IntegrationMetric#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The API key for the integration service. (Librato, Data Dog, New Relic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#api_key IntegrationMetric#api_key}
  */
  readonly apiKey?: string;
  /**
  * The client email. (Stackdriver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#client_email IntegrationMetric#client_email}
  */
  readonly clientEmail?: string;
  /**
  * Base64Encoded credentials. (Stackdriver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#credentials IntegrationMetric#credentials}
  */
  readonly credentials?: string;
  /**
  * The email address registred for the integration service. (Librato)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#email IntegrationMetric#email}
  */
  readonly email?: string;
  /**
  * External identifier that match the role you created. (Cloudwatch)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#iam_external_id IntegrationMetric#iam_external_id}
  */
  readonly iamExternalId?: string;
  /**
  * The ARN of the role to be assumed when publishing metrics. (Cloudwatch)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#iam_role IntegrationMetric#iam_role}
  */
  readonly iamRole?: string;
  /**
  * (optional) Include Auto-Delete queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#include_ad_queues IntegrationMetric#include_ad_queues}
  */
  readonly includeAdQueues?: boolean | cdktf.IResolvable;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#instance_id IntegrationMetric#instance_id}
  */
  readonly instanceId: number;
  /**
  * The name of log integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#name IntegrationMetric#name}
  */
  readonly name: string;
  /**
  * The private key. (Stackdriver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#private_key IntegrationMetric#private_key}
  */
  readonly privateKey?: string;
  /**
  * Private key identifier. (Stackdriver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#private_key_id IntegrationMetric#private_key_id}
  */
  readonly privateKeyId?: string;
  /**
  * Project ID. (Stackdriver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#project_id IntegrationMetric#project_id}
  */
  readonly projectId?: string;
  /**
  * (optional) allowlist using regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#queue_allowlist IntegrationMetric#queue_allowlist}
  */
  readonly queueAllowlist?: string;
  /**
  * AWS region for Cloudwatch and [US/EU] for Data dog/New relic. (Cloudwatch, Data Dog, New Relic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#region IntegrationMetric#region}
  */
  readonly region?: string;
  /**
  * AWS secret key. (Cloudwatch)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#secret_access_key IntegrationMetric#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * (optional) tags. E.g. env=prod,region=europe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#tags IntegrationMetric#tags}
  */
  readonly tags?: string;
  /**
  * (optional) allowlist using regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#vhost_allowlist IntegrationMetric#vhost_allowlist}
  */
  readonly vhostAllowlist?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric cloudamqp_integration_metric}
*/
export class IntegrationMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_integration_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationMetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationMetric to import
  * @param importFromId The id of the existing IntegrationMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_integration_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_metric cloudamqp_integration_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationMetricConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_integration_metric',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.38.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyId = config.accessKeyId;
    this._apiKey = config.apiKey;
    this._clientEmail = config.clientEmail;
    this._credentials = config.credentials;
    this._email = config.email;
    this._iamExternalId = config.iamExternalId;
    this._iamRole = config.iamRole;
    this._includeAdQueues = config.includeAdQueues;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._privateKeyId = config.privateKeyId;
    this._projectId = config.projectId;
    this._queueAllowlist = config.queueAllowlist;
    this._region = config.region;
    this._secretAccessKey = config.secretAccessKey;
    this._tags = config.tags;
    this._vhostAllowlist = config.vhostAllowlist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // client_email - computed: true, optional: true, required: false
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

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // iam_external_id - computed: false, optional: true, required: false
  private _iamExternalId?: string; 
  public get iamExternalId() {
    return this.getStringAttribute('iam_external_id');
  }
  public set iamExternalId(value: string) {
    this._iamExternalId = value;
  }
  public resetIamExternalId() {
    this._iamExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamExternalIdInput() {
    return this._iamExternalId;
  }

  // iam_role - computed: false, optional: true, required: false
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  public resetIamRole() {
    this._iamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_ad_queues - computed: false, optional: true, required: false
  private _includeAdQueues?: boolean | cdktf.IResolvable; 
  public get includeAdQueues() {
    return this.getBooleanAttribute('include_ad_queues');
  }
  public set includeAdQueues(value: boolean | cdktf.IResolvable) {
    this._includeAdQueues = value;
  }
  public resetIncludeAdQueues() {
    this._includeAdQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAdQueuesInput() {
    return this._includeAdQueues;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // private_key - computed: true, optional: true, required: false
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

  // private_key_id - computed: true, optional: true, required: false
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  public resetPrivateKeyId() {
    this._privateKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }

  // project_id - computed: true, optional: true, required: false
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

  // queue_allowlist - computed: false, optional: true, required: false
  private _queueAllowlist?: string; 
  public get queueAllowlist() {
    return this.getStringAttribute('queue_allowlist');
  }
  public set queueAllowlist(value: string) {
    this._queueAllowlist = value;
  }
  public resetQueueAllowlist() {
    this._queueAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueAllowlistInput() {
    return this._queueAllowlist;
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

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vhost_allowlist - computed: false, optional: true, required: false
  private _vhostAllowlist?: string; 
  public get vhostAllowlist() {
    return this.getStringAttribute('vhost_allowlist');
  }
  public set vhostAllowlist(value: string) {
    this._vhostAllowlist = value;
  }
  public resetVhostAllowlist() {
    this._vhostAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostAllowlistInput() {
    return this._vhostAllowlist;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      api_key: cdktf.stringToTerraform(this._apiKey),
      client_email: cdktf.stringToTerraform(this._clientEmail),
      credentials: cdktf.stringToTerraform(this._credentials),
      email: cdktf.stringToTerraform(this._email),
      iam_external_id: cdktf.stringToTerraform(this._iamExternalId),
      iam_role: cdktf.stringToTerraform(this._iamRole),
      include_ad_queues: cdktf.booleanToTerraform(this._includeAdQueues),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_id: cdktf.stringToTerraform(this._privateKeyId),
      project_id: cdktf.stringToTerraform(this._projectId),
      queue_allowlist: cdktf.stringToTerraform(this._queueAllowlist),
      region: cdktf.stringToTerraform(this._region),
      secret_access_key: cdktf.stringToTerraform(this._secretAccessKey),
      tags: cdktf.stringToTerraform(this._tags),
      vhost_allowlist: cdktf.stringToTerraform(this._vhostAllowlist),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
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
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_external_id: {
        value: cdktf.stringToHclTerraform(this._iamExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_role: {
        value: cdktf.stringToHclTerraform(this._iamRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_ad_queues: {
        value: cdktf.booleanToHclTerraform(this._includeAdQueues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      private_key_id: {
        value: cdktf.stringToHclTerraform(this._privateKeyId),
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
      queue_allowlist: {
        value: cdktf.stringToHclTerraform(this._queueAllowlist),
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
      secret_access_key: {
        value: cdktf.stringToHclTerraform(this._secretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vhost_allowlist: {
        value: cdktf.stringToHclTerraform(this._vhostAllowlist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
