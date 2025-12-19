// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudServicesKafkaServerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'register': Register the device to the cloud; 'deregister': Deregister the device from the cloud;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#action CloudServicesKafkaServerProfile#action}
  */
  readonly action?: string;
  /**
  * Set active_ns in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#active_ns CloudServicesKafkaServerProfile#active_ns}
  */
  readonly activeNs?: string;
  /**
  * Set active_ns in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#alias_ns CloudServicesKafkaServerProfile#alias_ns}
  */
  readonly aliasNs?: string;
  /**
  * Set bootstrap_servers in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#bootstrap_servers CloudServicesKafkaServerProfile#bootstrap_servers}
  */
  readonly bootstrapServers?: string;
  /**
  * Set client_id in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#client_id CloudServicesKafkaServerProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * Set client_secret in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#client_secret CloudServicesKafkaServerProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#id CloudServicesKafkaServerProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set active_ns in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#primary_ns CloudServicesKafkaServerProfile#primary_ns}
  */
  readonly primaryNs?: string;
  /**
  * Set resource_group in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#resource_group CloudServicesKafkaServerProfile#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Set sasl_mechanisms in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#sasl_mechanisms CloudServicesKafkaServerProfile#sasl_mechanisms}
  */
  readonly saslMechanisms?: string;
  /**
  * Set sasl_password in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#sasl_password CloudServicesKafkaServerProfile#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * Set schema_group_name in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#schema_group_name CloudServicesKafkaServerProfile#schema_group_name}
  */
  readonly schemaGroupName?: string;
  /**
  * Set active_ns in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#secondary_ns CloudServicesKafkaServerProfile#secondary_ns}
  */
  readonly secondaryNs?: string;
  /**
  * Set security_protocol in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#security_protocol CloudServicesKafkaServerProfile#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Set subscription_id in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#subscription_id CloudServicesKafkaServerProfile#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Set tenant_id in cloud credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#tenant_id CloudServicesKafkaServerProfile#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#uuid CloudServicesKafkaServerProfile#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile thunder_cloud_services_kafka_server_profile}
*/
export class CloudServicesKafkaServerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cloud_services_kafka_server_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudServicesKafkaServerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudServicesKafkaServerProfile to import
  * @param importFromId The id of the existing CloudServicesKafkaServerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudServicesKafkaServerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cloud_services_kafka_server_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_kafka_server_profile thunder_cloud_services_kafka_server_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudServicesKafkaServerProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudServicesKafkaServerProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cloud_services_kafka_server_profile',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._activeNs = config.activeNs;
    this._aliasNs = config.aliasNs;
    this._bootstrapServers = config.bootstrapServers;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._id = config.id;
    this._primaryNs = config.primaryNs;
    this._resourceGroup = config.resourceGroup;
    this._saslMechanisms = config.saslMechanisms;
    this._saslPassword = config.saslPassword;
    this._schemaGroupName = config.schemaGroupName;
    this._secondaryNs = config.secondaryNs;
    this._securityProtocol = config.securityProtocol;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // active_ns - computed: false, optional: true, required: false
  private _activeNs?: string; 
  public get activeNs() {
    return this.getStringAttribute('active_ns');
  }
  public set activeNs(value: string) {
    this._activeNs = value;
  }
  public resetActiveNs() {
    this._activeNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNsInput() {
    return this._activeNs;
  }

  // alias_ns - computed: false, optional: true, required: false
  private _aliasNs?: string; 
  public get aliasNs() {
    return this.getStringAttribute('alias_ns');
  }
  public set aliasNs(value: string) {
    this._aliasNs = value;
  }
  public resetAliasNs() {
    this._aliasNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNsInput() {
    return this._aliasNs;
  }

  // bootstrap_servers - computed: false, optional: true, required: false
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  public resetBootstrapServers() {
    this._bootstrapServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // primary_ns - computed: false, optional: true, required: false
  private _primaryNs?: string; 
  public get primaryNs() {
    return this.getStringAttribute('primary_ns');
  }
  public set primaryNs(value: string) {
    this._primaryNs = value;
  }
  public resetPrimaryNs() {
    this._primaryNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNsInput() {
    return this._primaryNs;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // sasl_mechanisms - computed: false, optional: true, required: false
  private _saslMechanisms?: string; 
  public get saslMechanisms() {
    return this.getStringAttribute('sasl_mechanisms');
  }
  public set saslMechanisms(value: string) {
    this._saslMechanisms = value;
  }
  public resetSaslMechanisms() {
    this._saslMechanisms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismsInput() {
    return this._saslMechanisms;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }
  public set saslPassword(value: string) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // schema_group_name - computed: false, optional: true, required: false
  private _schemaGroupName?: string; 
  public get schemaGroupName() {
    return this.getStringAttribute('schema_group_name');
  }
  public set schemaGroupName(value: string) {
    this._schemaGroupName = value;
  }
  public resetSchemaGroupName() {
    this._schemaGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaGroupNameInput() {
    return this._schemaGroupName;
  }

  // secondary_ns - computed: false, optional: true, required: false
  private _secondaryNs?: string; 
  public get secondaryNs() {
    return this.getStringAttribute('secondary_ns');
  }
  public set secondaryNs(value: string) {
    this._secondaryNs = value;
  }
  public resetSecondaryNs() {
    this._secondaryNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryNsInput() {
    return this._secondaryNs;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      active_ns: cdktf.stringToTerraform(this._activeNs),
      alias_ns: cdktf.stringToTerraform(this._aliasNs),
      bootstrap_servers: cdktf.stringToTerraform(this._bootstrapServers),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      id: cdktf.stringToTerraform(this._id),
      primary_ns: cdktf.stringToTerraform(this._primaryNs),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      sasl_mechanisms: cdktf.stringToTerraform(this._saslMechanisms),
      sasl_password: cdktf.stringToTerraform(this._saslPassword),
      schema_group_name: cdktf.stringToTerraform(this._schemaGroupName),
      secondary_ns: cdktf.stringToTerraform(this._secondaryNs),
      security_protocol: cdktf.stringToTerraform(this._securityProtocol),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_ns: {
        value: cdktf.stringToHclTerraform(this._activeNs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias_ns: {
        value: cdktf.stringToHclTerraform(this._aliasNs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_servers: {
        value: cdktf.stringToHclTerraform(this._bootstrapServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_ns: {
        value: cdktf.stringToHclTerraform(this._primaryNs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_mechanisms: {
        value: cdktf.stringToHclTerraform(this._saslMechanisms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_password: {
        value: cdktf.stringToHclTerraform(this._saslPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_group_name: {
        value: cdktf.stringToHclTerraform(this._schemaGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_ns: {
        value: cdktf.stringToHclTerraform(this._secondaryNs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_protocol: {
        value: cdktf.stringToHclTerraform(this._securityProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
