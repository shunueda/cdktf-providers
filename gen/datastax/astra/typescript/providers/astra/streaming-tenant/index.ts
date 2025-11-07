// https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamingTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud provider, one of `aws`, `gcp`, or `azure`.  Required if `cluster_name` is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_tenant#cloud_provider StreamingTenant#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * Pulsar cluster name.  Required if `cloud_provider` and `region` are not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_tenant#cluster_name StreamingTenant#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Whether or not to allow Terraform to destroy this tenant. Unless this field is set to false in Terraform state, a `terraform destroy` or `terraform apply` command that deletes the instance will fail. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_tenant#deletion_protection StreamingTenant#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_tenant#id StreamingTenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cloud provider region.  Required if `cluster_name` is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_tenant#region StreamingTenant#region}
  */
  readonly region?: string;
  /**
  * Streaming tenant name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_tenant#tenant_name StreamingTenant#tenant_name}
  */
  readonly tenantName: string;
  /**
  * Streaming tenant topic. Please use the `astra_streaming_topic` resource instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_tenant#topic StreamingTenant#topic}
  */
  readonly topic?: string;
  /**
  * User email for tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_tenant#user_email StreamingTenant#user_email}
  */
  readonly userEmail: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_tenant astra_streaming_tenant}
*/
export class StreamingTenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_streaming_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamingTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamingTenant to import
  * @param importFromId The id of the existing StreamingTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamingTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_streaming_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_tenant astra_streaming_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamingTenantConfig
  */
  public constructor(scope: Construct, id: string, config: StreamingTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'astra_streaming_tenant',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.3.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._clusterName = config.clusterName;
    this._deletionProtection = config.deletionProtection;
    this._id = config.id;
    this._region = config.region;
    this._tenantName = config.tenantName;
    this._topic = config.topic;
    this._userEmail = config.userEmail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // broker_service_url - computed: true, optional: false, required: false
  public get brokerServiceUrl() {
    return this.getStringAttribute('broker_service_url');
  }

  // cloud_provider - computed: true, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // region - computed: true, optional: true, required: false
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

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // user_email - computed: false, optional: false, required: true
  private _userEmail?: string; 
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailInput() {
    return this._userEmail;
  }

  // user_metrics_url - computed: true, optional: false, required: false
  public get userMetricsUrl() {
    return this.getStringAttribute('user_metrics_url');
  }

  // web_service_url - computed: true, optional: false, required: false
  public get webServiceUrl() {
    return this.getStringAttribute('web_service_url');
  }

  // web_socket_query_param_url - computed: true, optional: false, required: false
  public get webSocketQueryParamUrl() {
    return this.getStringAttribute('web_socket_query_param_url');
  }

  // web_socket_url - computed: true, optional: false, required: false
  public get webSocketUrl() {
    return this.getStringAttribute('web_socket_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      topic: cdktf.stringToTerraform(this._topic),
      user_email: cdktf.stringToTerraform(this._userEmail),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic: {
        value: cdktf.stringToHclTerraform(this._topic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_email: {
        value: cdktf.stringToHclTerraform(this._userEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
