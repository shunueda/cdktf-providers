// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/serverless_cloud_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerlessCloudGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cluster certificate (public key). Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/serverless_cloud_gateway#cluster_cert ServerlessCloudGateway#cluster_cert}
  */
  readonly clusterCert: string;
  /**
  * The cluster certificate key (private key). Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/serverless_cloud_gateway#cluster_cert_key ServerlessCloudGateway#cluster_cert_key}
  */
  readonly clusterCertKey: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/serverless_cloud_gateway#control_plane ServerlessCloudGateway#control_plane}
  */
  readonly controlPlane: ServerlessCloudGatewayControlPlane;
  /**
  * Labels to facilitate tagged search on serverless cloud gateways. Keys must be of length 1-63 characters, and cannot start with 'kong', 'konnect', 'mesh', 'kic', or '_'. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/serverless_cloud_gateway#labels ServerlessCloudGateway#labels}
  */
  readonly labels?: { [key: string]: string };
}
export interface ServerlessCloudGatewayControlPlane {
  /**
  * ID of the serverless cloud gateway CP. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/serverless_cloud_gateway#id ServerlessCloudGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The prefix of the serverless cloud gateway CP. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/serverless_cloud_gateway#prefix ServerlessCloudGateway#prefix}
  */
  readonly prefix: string;
  /**
  * The control plane region. must be one of ["us", "eu", "au"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/serverless_cloud_gateway#region ServerlessCloudGateway#region}
  */
  readonly region: string;
}

export function serverlessCloudGatewayControlPlaneToTerraform(struct?: ServerlessCloudGatewayControlPlane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function serverlessCloudGatewayControlPlaneToHclTerraform(struct?: ServerlessCloudGatewayControlPlane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessCloudGatewayControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerlessCloudGatewayControlPlane | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessCloudGatewayControlPlane | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prefix = value.prefix;
      this._region = value.region;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/serverless_cloud_gateway konnect_serverless_cloud_gateway}
*/
export class ServerlessCloudGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_serverless_cloud_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerlessCloudGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerlessCloudGateway to import
  * @param importFromId The id of the existing ServerlessCloudGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/serverless_cloud_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerlessCloudGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_serverless_cloud_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/serverless_cloud_gateway konnect_serverless_cloud_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerlessCloudGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ServerlessCloudGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_serverless_cloud_gateway',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterCert = config.clusterCert;
    this._clusterCertKey = config.clusterCertKey;
    this._controlPlane.internalValue = config.controlPlane;
    this._labels = config.labels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_cert - computed: false, optional: false, required: true
  private _clusterCert?: string; 
  public get clusterCert() {
    return this.getStringAttribute('cluster_cert');
  }
  public set clusterCert(value: string) {
    this._clusterCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCertInput() {
    return this._clusterCert;
  }

  // cluster_cert_key - computed: false, optional: false, required: true
  private _clusterCertKey?: string; 
  public get clusterCertKey() {
    return this.getStringAttribute('cluster_cert_key');
  }
  public set clusterCertKey(value: string) {
    this._clusterCertKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCertKeyInput() {
    return this._clusterCertKey;
  }

  // control_plane - computed: false, optional: false, required: true
  private _controlPlane = new ServerlessCloudGatewayControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: ServerlessCloudGatewayControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // gateway_endpoint - computed: true, optional: false, required: false
  public get gatewayEndpoint() {
    return this.getStringAttribute('gateway_endpoint');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_cert: cdktf.stringToTerraform(this._clusterCert),
      cluster_cert_key: cdktf.stringToTerraform(this._clusterCertKey),
      control_plane: serverlessCloudGatewayControlPlaneToTerraform(this._controlPlane.internalValue),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_cert: {
        value: cdktf.stringToHclTerraform(this._clusterCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_cert_key: {
        value: cdktf.stringToHclTerraform(this._clusterCertKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane: {
        value: serverlessCloudGatewayControlPlaneToHclTerraform(this._controlPlane.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerlessCloudGatewayControlPlane",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
