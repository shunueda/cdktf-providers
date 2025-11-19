// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RpcBasedSamplingConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#enabled RpcBasedSampling#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specify the RPC endpoint name. If the endpoint name is empty, either remote operation name or remote service name must be specified that can be used for RPC matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#endpoint_name RpcBasedSampling#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * Possible Values: `CONTAINS`, `DOES_NOT_CONTAIN`, `DOES_NOT_END_WITH`, `DOES_NOT_EQUAL`, `DOES_NOT_START_WITH`, `ENDS_WITH`, `EQUALS`, `STARTS_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#endpoint_name_comparison_type RpcBasedSampling#endpoint_name_comparison_type}
  */
  readonly endpointNameComparisonType: string;
  /**
  * Possible Values: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `8`, `9`, `10`, `11`, `12`, `13`, `14` 
  * 
  *   - `0`: Increase capturing 128 times
  * 
  *   - `1`: Increase capturing 64 times
  * 
  *   - `2`: Increase capturing 32 times
  * 
  *   - `3`: Increase capturing 16 times
  * 
  *   - `4`: Increase capturing 8 times
  * 
  *   - `5`: Increase capturing 4 times
  * 
  *   - `6`: Increase capturing 2 times
  * 
  *   - `8`: Reduce capturing by factor 2
  * 
  *   - `9`: Reduce capturing by factor 4
  * 
  *   - `10`: Reduce capturing by factor 8
  * 
  *   - `11`: Reduce capturing by factor 16
  * 
  *   - `12`: Reduce capturing by factor 32
  * 
  *   - `13`: Reduce capturing by factor 64
  * 
  *   - `14`: Reduce capturing by factor 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#factor RpcBasedSampling#factor}
  */
  readonly factor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#id RpcBasedSampling#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * No Traces will be captured for matching RPC requests. This applies always, even if Adaptive Traffic Management is inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#ignore RpcBasedSampling#ignore}
  */
  readonly ignore: boolean | cdktf.IResolvable;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#insert_after RpcBasedSampling#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Specify the RPC operation name. If the remote operation name is empty, either remote service name or endpoint name must be specified that can be used for RPC matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#remote_operation_name RpcBasedSampling#remote_operation_name}
  */
  readonly remoteOperationName?: string;
  /**
  * Possible Values: `CONTAINS`, `DOES_NOT_CONTAIN`, `DOES_NOT_END_WITH`, `DOES_NOT_EQUAL`, `DOES_NOT_START_WITH`, `ENDS_WITH`, `EQUALS`, `STARTS_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#remote_operation_name_comparison_type RpcBasedSampling#remote_operation_name_comparison_type}
  */
  readonly remoteOperationNameComparisonType: string;
  /**
  * Specify the RPC remote service name. If the remote service name is empty, either remote operation name or endpoint name must be specified that can be used for RPC matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#remote_service_name RpcBasedSampling#remote_service_name}
  */
  readonly remoteServiceName?: string;
  /**
  * Possible Values: `CONTAINS`, `DOES_NOT_CONTAIN`, `DOES_NOT_END_WITH`, `DOES_NOT_EQUAL`, `DOES_NOT_START_WITH`, `ENDS_WITH`, `EQUALS`, `STARTS_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#remote_service_name_comparison_type RpcBasedSampling#remote_service_name_comparison_type}
  */
  readonly remoteServiceNameComparisonType: string;
  /**
  * The scope of this setting (PROCESS_GROUP_INSTANCE, PROCESS_GROUP, CLOUD_APPLICATION, CLOUD_APPLICATION_NAMESPACE, KUBERNETES_CLUSTER, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#scope RpcBasedSampling#scope}
  */
  readonly scope?: string;
  /**
  * Possible Values: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10` 
  * 
  *   - `1`: ADK
  * 
  *   - `2`: DOTNET_REMOTING
  * 
  *   - `3`: DOTNET_REMOTING_TCP
  * 
  *   - `4`: DOTNET_REMOTING_HTTP
  * 
  *   - `5`: DOTNET_REMOTING_XMLRPC
  * 
  *   - `6`: GRPC
  * 
  *   - `7`: GRPC_BIDI
  * 
  *   - `8`: GRPC_UNARY
  * 
  *   - `9`: GRPC_SERVERSTREAM
  * 
  *   - `10`: GRPC_CLIENTSTREAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#wire_protocol_type RpcBasedSampling#wire_protocol_type}
  */
  readonly wireProtocolType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling dynatrace_rpc_based_sampling}
*/
export class RpcBasedSampling extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_rpc_based_sampling";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RpcBasedSampling resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RpcBasedSampling to import
  * @param importFromId The id of the existing RpcBasedSampling that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RpcBasedSampling to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_rpc_based_sampling", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rpc_based_sampling dynatrace_rpc_based_sampling} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RpcBasedSamplingConfig
  */
  public constructor(scope: Construct, id: string, config: RpcBasedSamplingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_rpc_based_sampling',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
    this._endpointName = config.endpointName;
    this._endpointNameComparisonType = config.endpointNameComparisonType;
    this._factor = config.factor;
    this._id = config.id;
    this._ignore = config.ignore;
    this._insertAfter = config.insertAfter;
    this._remoteOperationName = config.remoteOperationName;
    this._remoteOperationNameComparisonType = config.remoteOperationNameComparisonType;
    this._remoteServiceName = config.remoteServiceName;
    this._remoteServiceNameComparisonType = config.remoteServiceNameComparisonType;
    this._scope = config.scope;
    this._wireProtocolType = config.wireProtocolType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint_name - computed: false, optional: true, required: false
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  public resetEndpointName() {
    this._endpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // endpoint_name_comparison_type - computed: false, optional: false, required: true
  private _endpointNameComparisonType?: string; 
  public get endpointNameComparisonType() {
    return this.getStringAttribute('endpoint_name_comparison_type');
  }
  public set endpointNameComparisonType(value: string) {
    this._endpointNameComparisonType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameComparisonTypeInput() {
    return this._endpointNameComparisonType;
  }

  // factor - computed: false, optional: true, required: false
  private _factor?: string; 
  public get factor() {
    return this.getStringAttribute('factor');
  }
  public set factor(value: string) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
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

  // ignore - computed: false, optional: false, required: true
  private _ignore?: boolean | cdktf.IResolvable; 
  public get ignore() {
    return this.getBooleanAttribute('ignore');
  }
  public set ignore(value: boolean | cdktf.IResolvable) {
    this._ignore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // remote_operation_name - computed: false, optional: true, required: false
  private _remoteOperationName?: string; 
  public get remoteOperationName() {
    return this.getStringAttribute('remote_operation_name');
  }
  public set remoteOperationName(value: string) {
    this._remoteOperationName = value;
  }
  public resetRemoteOperationName() {
    this._remoteOperationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteOperationNameInput() {
    return this._remoteOperationName;
  }

  // remote_operation_name_comparison_type - computed: false, optional: false, required: true
  private _remoteOperationNameComparisonType?: string; 
  public get remoteOperationNameComparisonType() {
    return this.getStringAttribute('remote_operation_name_comparison_type');
  }
  public set remoteOperationNameComparisonType(value: string) {
    this._remoteOperationNameComparisonType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteOperationNameComparisonTypeInput() {
    return this._remoteOperationNameComparisonType;
  }

  // remote_service_name - computed: false, optional: true, required: false
  private _remoteServiceName?: string; 
  public get remoteServiceName() {
    return this.getStringAttribute('remote_service_name');
  }
  public set remoteServiceName(value: string) {
    this._remoteServiceName = value;
  }
  public resetRemoteServiceName() {
    this._remoteServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteServiceNameInput() {
    return this._remoteServiceName;
  }

  // remote_service_name_comparison_type - computed: false, optional: false, required: true
  private _remoteServiceNameComparisonType?: string; 
  public get remoteServiceNameComparisonType() {
    return this.getStringAttribute('remote_service_name_comparison_type');
  }
  public set remoteServiceNameComparisonType(value: string) {
    this._remoteServiceNameComparisonType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteServiceNameComparisonTypeInput() {
    return this._remoteServiceNameComparisonType;
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

  // wire_protocol_type - computed: false, optional: false, required: true
  private _wireProtocolType?: string; 
  public get wireProtocolType() {
    return this.getStringAttribute('wire_protocol_type');
  }
  public set wireProtocolType(value: string) {
    this._wireProtocolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wireProtocolTypeInput() {
    return this._wireProtocolType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint_name: cdktf.stringToTerraform(this._endpointName),
      endpoint_name_comparison_type: cdktf.stringToTerraform(this._endpointNameComparisonType),
      factor: cdktf.stringToTerraform(this._factor),
      id: cdktf.stringToTerraform(this._id),
      ignore: cdktf.booleanToTerraform(this._ignore),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      remote_operation_name: cdktf.stringToTerraform(this._remoteOperationName),
      remote_operation_name_comparison_type: cdktf.stringToTerraform(this._remoteOperationNameComparisonType),
      remote_service_name: cdktf.stringToTerraform(this._remoteServiceName),
      remote_service_name_comparison_type: cdktf.stringToTerraform(this._remoteServiceNameComparisonType),
      scope: cdktf.stringToTerraform(this._scope),
      wire_protocol_type: cdktf.stringToTerraform(this._wireProtocolType),
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
      endpoint_name: {
        value: cdktf.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_name_comparison_type: {
        value: cdktf.stringToHclTerraform(this._endpointNameComparisonType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      factor: {
        value: cdktf.stringToHclTerraform(this._factor),
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
      ignore: {
        value: cdktf.booleanToHclTerraform(this._ignore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_operation_name: {
        value: cdktf.stringToHclTerraform(this._remoteOperationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_operation_name_comparison_type: {
        value: cdktf.stringToHclTerraform(this._remoteOperationNameComparisonType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_service_name: {
        value: cdktf.stringToHclTerraform(this._remoteServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_service_name_comparison_type: {
        value: cdktf.stringToHclTerraform(this._remoteServiceNameComparisonType),
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
      wire_protocol_type: {
        value: cdktf.stringToHclTerraform(this._wireProtocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
