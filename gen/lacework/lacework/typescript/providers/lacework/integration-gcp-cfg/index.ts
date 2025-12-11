// https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGcpCfgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg#enabled IntegrationGcpCfg#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg#id IntegrationGcpCfg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg#name IntegrationGcpCfg#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg#resource_id IntegrationGcpCfg#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg#resource_level IntegrationGcpCfg#resource_level}
  */
  readonly resourceLevel?: string;
  /**
  * The number of attempts to create the external integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg#retries IntegrationGcpCfg#retries}
  */
  readonly retries?: number;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg#credentials IntegrationGcpCfg#credentials}
  */
  readonly credentials: IntegrationGcpCfgCredentials;
}
export interface IntegrationGcpCfgCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg#client_email IntegrationGcpCfg#client_email}
  */
  readonly clientEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg#client_id IntegrationGcpCfg#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg#private_key IntegrationGcpCfg#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg#private_key_id IntegrationGcpCfg#private_key_id}
  */
  readonly privateKeyId: string;
}

export function integrationGcpCfgCredentialsToTerraform(struct?: IntegrationGcpCfgCredentialsOutputReference | IntegrationGcpCfgCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_email: cdktf.stringToTerraform(struct!.clientEmail),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_id: cdktf.stringToTerraform(struct!.privateKeyId),
  }
}


export function integrationGcpCfgCredentialsToHclTerraform(struct?: IntegrationGcpCfgCredentialsOutputReference | IntegrationGcpCfgCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_email: {
      value: cdktf.stringToHclTerraform(struct!.clientEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_id: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationGcpCfgCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationGcpCfgCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEmail = this._clientEmail;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyId = this._privateKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationGcpCfgCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientEmail = undefined;
      this._clientId = undefined;
      this._privateKey = undefined;
      this._privateKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientEmail = value.clientEmail;
      this._clientId = value.clientId;
      this._privateKey = value.privateKey;
      this._privateKeyId = value.privateKeyId;
    }
  }

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: false, required: true
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg lacework_integration_gcp_cfg}
*/
export class IntegrationGcpCfg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_integration_gcp_cfg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationGcpCfg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationGcpCfg to import
  * @param importFromId The id of the existing IntegrationGcpCfg that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationGcpCfg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_integration_gcp_cfg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/integration_gcp_cfg lacework_integration_gcp_cfg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationGcpCfgConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationGcpCfgConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_integration_gcp_cfg',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.11',
        providerVersionConstraint: '2.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._resourceId = config.resourceId;
    this._resourceLevel = config.resourceLevel;
    this._retries = config.retries;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_or_updated_by - computed: true, optional: false, required: false
  public get createdOrUpdatedBy() {
    return this.getStringAttribute('created_or_updated_by');
  }

  // created_or_updated_time - computed: true, optional: false, required: false
  public get createdOrUpdatedTime() {
    return this.getStringAttribute('created_or_updated_time');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // intg_guid - computed: true, optional: false, required: false
  public get intgGuid() {
    return this.getStringAttribute('intg_guid');
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

  // org_level - computed: true, optional: false, required: false
  public get orgLevel() {
    return this.getBooleanAttribute('org_level');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_level - computed: false, optional: true, required: false
  private _resourceLevel?: string; 
  public get resourceLevel() {
    return this.getStringAttribute('resource_level');
  }
  public set resourceLevel(value: string) {
    this._resourceLevel = value;
  }
  public resetResourceLevel() {
    this._resourceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLevelInput() {
    return this._resourceLevel;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationGcpCfgCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationGcpCfgCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_level: cdktf.stringToTerraform(this._resourceLevel),
      retries: cdktf.numberToTerraform(this._retries),
      credentials: integrationGcpCfgCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_level: {
        value: cdktf.stringToHclTerraform(this._resourceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      credentials: {
        value: integrationGcpCfgCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationGcpCfgCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
