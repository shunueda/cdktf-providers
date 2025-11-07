// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#environment NetworkConnector#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#name NetworkConnector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#network NetworkConnector#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#permitted_json NetworkConnector#permitted_json}
  */
  readonly permittedJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#platform_acceptor NetworkConnector#platform_acceptor}
  */
  readonly platformAcceptor?: NetworkConnectorPlatformAcceptor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#platform_requestor NetworkConnector#platform_requestor}
  */
  readonly platformRequestor?: NetworkConnectorPlatformRequestor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#type NetworkConnector#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#zone NetworkConnector#zone}
  */
  readonly zone: string;
}
export interface NetworkConnectorPlatformAcceptor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#target_account_id NetworkConnector#target_account_id}
  */
  readonly targetAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#target_connector_id NetworkConnector#target_connector_id}
  */
  readonly targetConnectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#target_environment_id NetworkConnector#target_environment_id}
  */
  readonly targetEnvironmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#target_network_id NetworkConnector#target_network_id}
  */
  readonly targetNetworkId: string;
}

export function networkConnectorPlatformAcceptorToTerraform(struct?: NetworkConnectorPlatformAcceptor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_account_id: cdktf.stringToTerraform(struct!.targetAccountId),
    target_connector_id: cdktf.stringToTerraform(struct!.targetConnectorId),
    target_environment_id: cdktf.stringToTerraform(struct!.targetEnvironmentId),
    target_network_id: cdktf.stringToTerraform(struct!.targetNetworkId),
  }
}


export function networkConnectorPlatformAcceptorToHclTerraform(struct?: NetworkConnectorPlatformAcceptor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_account_id: {
      value: cdktf.stringToHclTerraform(struct!.targetAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_connector_id: {
      value: cdktf.stringToHclTerraform(struct!.targetConnectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_environment_id: {
      value: cdktf.stringToHclTerraform(struct!.targetEnvironmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_network_id: {
      value: cdktf.stringToHclTerraform(struct!.targetNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectorPlatformAcceptorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkConnectorPlatformAcceptor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAccountId = this._targetAccountId;
    }
    if (this._targetConnectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetConnectorId = this._targetConnectorId;
    }
    if (this._targetEnvironmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetEnvironmentId = this._targetEnvironmentId;
    }
    if (this._targetNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNetworkId = this._targetNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectorPlatformAcceptor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetAccountId = undefined;
      this._targetConnectorId = undefined;
      this._targetEnvironmentId = undefined;
      this._targetNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetAccountId = value.targetAccountId;
      this._targetConnectorId = value.targetConnectorId;
      this._targetEnvironmentId = value.targetEnvironmentId;
      this._targetNetworkId = value.targetNetworkId;
    }
  }

  // target_account_id - computed: false, optional: false, required: true
  private _targetAccountId?: string; 
  public get targetAccountId() {
    return this.getStringAttribute('target_account_id');
  }
  public set targetAccountId(value: string) {
    this._targetAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAccountIdInput() {
    return this._targetAccountId;
  }

  // target_connector_id - computed: false, optional: false, required: true
  private _targetConnectorId?: string; 
  public get targetConnectorId() {
    return this.getStringAttribute('target_connector_id');
  }
  public set targetConnectorId(value: string) {
    this._targetConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConnectorIdInput() {
    return this._targetConnectorId;
  }

  // target_environment_id - computed: false, optional: false, required: true
  private _targetEnvironmentId?: string; 
  public get targetEnvironmentId() {
    return this.getStringAttribute('target_environment_id');
  }
  public set targetEnvironmentId(value: string) {
    this._targetEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetEnvironmentIdInput() {
    return this._targetEnvironmentId;
  }

  // target_network_id - computed: false, optional: false, required: true
  private _targetNetworkId?: string; 
  public get targetNetworkId() {
    return this.getStringAttribute('target_network_id');
  }
  public set targetNetworkId(value: string) {
    this._targetNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkIdInput() {
    return this._targetNetworkId;
  }
}
export interface NetworkConnectorPlatformRequestor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#target_account_id NetworkConnector#target_account_id}
  */
  readonly targetAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#target_environment_id NetworkConnector#target_environment_id}
  */
  readonly targetEnvironmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#target_network_id NetworkConnector#target_network_id}
  */
  readonly targetNetworkId: string;
}

export function networkConnectorPlatformRequestorToTerraform(struct?: NetworkConnectorPlatformRequestor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_account_id: cdktf.stringToTerraform(struct!.targetAccountId),
    target_environment_id: cdktf.stringToTerraform(struct!.targetEnvironmentId),
    target_network_id: cdktf.stringToTerraform(struct!.targetNetworkId),
  }
}


export function networkConnectorPlatformRequestorToHclTerraform(struct?: NetworkConnectorPlatformRequestor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_account_id: {
      value: cdktf.stringToHclTerraform(struct!.targetAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_environment_id: {
      value: cdktf.stringToHclTerraform(struct!.targetEnvironmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_network_id: {
      value: cdktf.stringToHclTerraform(struct!.targetNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectorPlatformRequestorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkConnectorPlatformRequestor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAccountId = this._targetAccountId;
    }
    if (this._targetEnvironmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetEnvironmentId = this._targetEnvironmentId;
    }
    if (this._targetNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNetworkId = this._targetNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectorPlatformRequestor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetAccountId = undefined;
      this._targetEnvironmentId = undefined;
      this._targetNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetAccountId = value.targetAccountId;
      this._targetEnvironmentId = value.targetEnvironmentId;
      this._targetNetworkId = value.targetNetworkId;
    }
  }

  // target_account_id - computed: false, optional: false, required: true
  private _targetAccountId?: string; 
  public get targetAccountId() {
    return this.getStringAttribute('target_account_id');
  }
  public set targetAccountId(value: string) {
    this._targetAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAccountIdInput() {
    return this._targetAccountId;
  }

  // target_connector_id - computed: true, optional: false, required: false
  public get targetConnectorId() {
    return this.getStringAttribute('target_connector_id');
  }

  // target_environment_id - computed: false, optional: false, required: true
  private _targetEnvironmentId?: string; 
  public get targetEnvironmentId() {
    return this.getStringAttribute('target_environment_id');
  }
  public set targetEnvironmentId(value: string) {
    this._targetEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetEnvironmentIdInput() {
    return this._targetEnvironmentId;
  }

  // target_network_id - computed: false, optional: false, required: true
  private _targetNetworkId?: string; 
  public get targetNetworkId() {
    return this.getStringAttribute('target_network_id');
  }
  public set targetNetworkId(value: string) {
    this._targetNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkIdInput() {
    return this._targetNetworkId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector kaleido_network_connector}
*/
export class NetworkConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_network_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkConnector to import
  * @param importFromId The id of the existing NetworkConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_network_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/network_connector kaleido_network_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_network_connector',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environment = config.environment;
    this._name = config.name;
    this._network = config.network;
    this._permittedJson = config.permittedJson;
    this._platformAcceptor.internalValue = config.platformAcceptor;
    this._platformRequestor.internalValue = config.platformRequestor;
    this._type = config.type;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // permitted_json - computed: false, optional: true, required: false
  private _permittedJson?: string; 
  public get permittedJson() {
    return this.getStringAttribute('permitted_json');
  }
  public set permittedJson(value: string) {
    this._permittedJson = value;
  }
  public resetPermittedJson() {
    this._permittedJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedJsonInput() {
    return this._permittedJson;
  }

  // platform_acceptor - computed: false, optional: true, required: false
  private _platformAcceptor = new NetworkConnectorPlatformAcceptorOutputReference(this, "platform_acceptor");
  public get platformAcceptor() {
    return this._platformAcceptor;
  }
  public putPlatformAcceptor(value: NetworkConnectorPlatformAcceptor) {
    this._platformAcceptor.internalValue = value;
  }
  public resetPlatformAcceptor() {
    this._platformAcceptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformAcceptorInput() {
    return this._platformAcceptor.internalValue;
  }

  // platform_requestor - computed: false, optional: true, required: false
  private _platformRequestor = new NetworkConnectorPlatformRequestorOutputReference(this, "platform_requestor");
  public get platformRequestor() {
    return this._platformRequestor;
  }
  public putPlatformRequestor(value: NetworkConnectorPlatformRequestor) {
    this._platformRequestor.internalValue = value;
  }
  public resetPlatformRequestor() {
    this._platformRequestor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformRequestorInput() {
    return this._platformRequestor.internalValue;
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

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      permitted_json: cdktf.stringToTerraform(this._permittedJson),
      platform_acceptor: networkConnectorPlatformAcceptorToTerraform(this._platformAcceptor.internalValue),
      platform_requestor: networkConnectorPlatformRequestorToTerraform(this._platformRequestor.internalValue),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permitted_json: {
        value: cdktf.stringToHclTerraform(this._permittedJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_acceptor: {
        value: networkConnectorPlatformAcceptorToHclTerraform(this._platformAcceptor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkConnectorPlatformAcceptor",
      },
      platform_requestor: {
        value: networkConnectorPlatformRequestorToHclTerraform(this._platformRequestor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkConnectorPlatformRequestor",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
