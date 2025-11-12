// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecureCloudAuthAccountComponentAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#account_id SecureCloudAuthAccountComponentA#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#cloud_connector_metadata SecureCloudAuthAccountComponentA#cloud_connector_metadata}
  */
  readonly cloudConnectorMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#cloud_logs_metadata SecureCloudAuthAccountComponentA#cloud_logs_metadata}
  */
  readonly cloudLogsMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#crypto_key_metadata SecureCloudAuthAccountComponentA#crypto_key_metadata}
  */
  readonly cryptoKeyMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#event_bridge_metadata SecureCloudAuthAccountComponentA#event_bridge_metadata}
  */
  readonly eventBridgeMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#id SecureCloudAuthAccountComponentA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#instance SecureCloudAuthAccountComponentA#instance}
  */
  readonly instance: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#service_principal_metadata SecureCloudAuthAccountComponentA#service_principal_metadata}
  */
  readonly servicePrincipalMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#trusted_role_metadata SecureCloudAuthAccountComponentA#trusted_role_metadata}
  */
  readonly trustedRoleMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#type SecureCloudAuthAccountComponentA#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#version SecureCloudAuthAccountComponentA#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#webhook_datasource_metadata SecureCloudAuthAccountComponentA#webhook_datasource_metadata}
  */
  readonly webhookDatasourceMetadata?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#timeouts SecureCloudAuthAccountComponentA#timeouts}
  */
  readonly timeouts?: SecureCloudAuthAccountComponentTimeouts;
}
export interface SecureCloudAuthAccountComponentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#create SecureCloudAuthAccountComponentA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#delete SecureCloudAuthAccountComponentA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#read SecureCloudAuthAccountComponentA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#update SecureCloudAuthAccountComponentA#update}
  */
  readonly update?: string;
}

export function secureCloudAuthAccountComponentTimeoutsToTerraform(struct?: SecureCloudAuthAccountComponentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function secureCloudAuthAccountComponentTimeoutsToHclTerraform(struct?: SecureCloudAuthAccountComponentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureCloudAuthAccountComponentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecureCloudAuthAccountComponentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureCloudAuthAccountComponentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component sysdig_secure_cloud_auth_account_component}
*/
export class SecureCloudAuthAccountComponentA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_secure_cloud_auth_account_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecureCloudAuthAccountComponentA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecureCloudAuthAccountComponentA to import
  * @param importFromId The id of the existing SecureCloudAuthAccountComponentA that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecureCloudAuthAccountComponentA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_secure_cloud_auth_account_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account_component sysdig_secure_cloud_auth_account_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecureCloudAuthAccountComponentAConfig
  */
  public constructor(scope: Construct, id: string, config: SecureCloudAuthAccountComponentAConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_secure_cloud_auth_account_component',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.1.0',
        providerVersionConstraint: '3.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._cloudConnectorMetadata = config.cloudConnectorMetadata;
    this._cloudLogsMetadata = config.cloudLogsMetadata;
    this._cryptoKeyMetadata = config.cryptoKeyMetadata;
    this._eventBridgeMetadata = config.eventBridgeMetadata;
    this._id = config.id;
    this._instance = config.instance;
    this._servicePrincipalMetadata = config.servicePrincipalMetadata;
    this._trustedRoleMetadata = config.trustedRoleMetadata;
    this._type = config.type;
    this._version = config.version;
    this._webhookDatasourceMetadata = config.webhookDatasourceMetadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // cloud_connector_metadata - computed: false, optional: true, required: false
  private _cloudConnectorMetadata?: string; 
  public get cloudConnectorMetadata() {
    return this.getStringAttribute('cloud_connector_metadata');
  }
  public set cloudConnectorMetadata(value: string) {
    this._cloudConnectorMetadata = value;
  }
  public resetCloudConnectorMetadata() {
    this._cloudConnectorMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConnectorMetadataInput() {
    return this._cloudConnectorMetadata;
  }

  // cloud_logs_metadata - computed: false, optional: true, required: false
  private _cloudLogsMetadata?: string; 
  public get cloudLogsMetadata() {
    return this.getStringAttribute('cloud_logs_metadata');
  }
  public set cloudLogsMetadata(value: string) {
    this._cloudLogsMetadata = value;
  }
  public resetCloudLogsMetadata() {
    this._cloudLogsMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLogsMetadataInput() {
    return this._cloudLogsMetadata;
  }

  // crypto_key_metadata - computed: false, optional: true, required: false
  private _cryptoKeyMetadata?: string; 
  public get cryptoKeyMetadata() {
    return this.getStringAttribute('crypto_key_metadata');
  }
  public set cryptoKeyMetadata(value: string) {
    this._cryptoKeyMetadata = value;
  }
  public resetCryptoKeyMetadata() {
    this._cryptoKeyMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyMetadataInput() {
    return this._cryptoKeyMetadata;
  }

  // event_bridge_metadata - computed: false, optional: true, required: false
  private _eventBridgeMetadata?: string; 
  public get eventBridgeMetadata() {
    return this.getStringAttribute('event_bridge_metadata');
  }
  public set eventBridgeMetadata(value: string) {
    this._eventBridgeMetadata = value;
  }
  public resetEventBridgeMetadata() {
    this._eventBridgeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeMetadataInput() {
    return this._eventBridgeMetadata;
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // service_principal_metadata - computed: false, optional: true, required: false
  private _servicePrincipalMetadata?: string; 
  public get servicePrincipalMetadata() {
    return this.getStringAttribute('service_principal_metadata');
  }
  public set servicePrincipalMetadata(value: string) {
    this._servicePrincipalMetadata = value;
  }
  public resetServicePrincipalMetadata() {
    this._servicePrincipalMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalMetadataInput() {
    return this._servicePrincipalMetadata;
  }

  // trusted_role_metadata - computed: false, optional: true, required: false
  private _trustedRoleMetadata?: string; 
  public get trustedRoleMetadata() {
    return this.getStringAttribute('trusted_role_metadata');
  }
  public set trustedRoleMetadata(value: string) {
    this._trustedRoleMetadata = value;
  }
  public resetTrustedRoleMetadata() {
    this._trustedRoleMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedRoleMetadataInput() {
    return this._trustedRoleMetadata;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // webhook_datasource_metadata - computed: false, optional: true, required: false
  private _webhookDatasourceMetadata?: string; 
  public get webhookDatasourceMetadata() {
    return this.getStringAttribute('webhook_datasource_metadata');
  }
  public set webhookDatasourceMetadata(value: string) {
    this._webhookDatasourceMetadata = value;
  }
  public resetWebhookDatasourceMetadata() {
    this._webhookDatasourceMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookDatasourceMetadataInput() {
    return this._webhookDatasourceMetadata;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecureCloudAuthAccountComponentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecureCloudAuthAccountComponentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      cloud_connector_metadata: cdktf.stringToTerraform(this._cloudConnectorMetadata),
      cloud_logs_metadata: cdktf.stringToTerraform(this._cloudLogsMetadata),
      crypto_key_metadata: cdktf.stringToTerraform(this._cryptoKeyMetadata),
      event_bridge_metadata: cdktf.stringToTerraform(this._eventBridgeMetadata),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      service_principal_metadata: cdktf.stringToTerraform(this._servicePrincipalMetadata),
      trusted_role_metadata: cdktf.stringToTerraform(this._trustedRoleMetadata),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      webhook_datasource_metadata: cdktf.stringToTerraform(this._webhookDatasourceMetadata),
      timeouts: secureCloudAuthAccountComponentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_connector_metadata: {
        value: cdktf.stringToHclTerraform(this._cloudConnectorMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_logs_metadata: {
        value: cdktf.stringToHclTerraform(this._cloudLogsMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crypto_key_metadata: {
        value: cdktf.stringToHclTerraform(this._cryptoKeyMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_bridge_metadata: {
        value: cdktf.stringToHclTerraform(this._eventBridgeMetadata),
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
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_principal_metadata: {
        value: cdktf.stringToHclTerraform(this._servicePrincipalMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_role_metadata: {
        value: cdktf.stringToHclTerraform(this._trustedRoleMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_datasource_metadata: {
        value: cdktf.stringToHclTerraform(this._webhookDatasourceMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: secureCloudAuthAccountComponentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecureCloudAuthAccountComponentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
