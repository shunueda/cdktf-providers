// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/aws_endpoint_service_principal_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsEndpointServicePrincipalV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/aws_endpoint_service_principal_v2#cluster_data_center_id AwsEndpointServicePrincipalV2#cluster_data_center_id}
  */
  readonly clusterDataCenterId: string;
  /**
  * The Instaclustr ID of the AWS endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/aws_endpoint_service_principal_v2#end_point_service_id AwsEndpointServicePrincipalV2#end_point_service_id}
  */
  readonly endPointServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/aws_endpoint_service_principal_v2#id AwsEndpointServicePrincipalV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IAM Principal ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/aws_endpoint_service_principal_v2#principal_arn AwsEndpointServicePrincipalV2#principal_arn}
  */
  readonly principalArn: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/aws_endpoint_service_principal_v2#timeouts AwsEndpointServicePrincipalV2#timeouts}
  */
  readonly timeouts?: AwsEndpointServicePrincipalV2Timeouts;
}
export interface AwsEndpointServicePrincipalV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/aws_endpoint_service_principal_v2#default AwsEndpointServicePrincipalV2#default}
  */
  readonly default?: string;
}

export function awsEndpointServicePrincipalV2TimeoutsToTerraform(struct?: AwsEndpointServicePrincipalV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function awsEndpointServicePrincipalV2TimeoutsToHclTerraform(struct?: AwsEndpointServicePrincipalV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsEndpointServicePrincipalV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsEndpointServicePrincipalV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsEndpointServicePrincipalV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/aws_endpoint_service_principal_v2 instaclustr_aws_endpoint_service_principal_v2}
*/
export class AwsEndpointServicePrincipalV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_aws_endpoint_service_principal_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsEndpointServicePrincipalV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsEndpointServicePrincipalV2 to import
  * @param importFromId The id of the existing AwsEndpointServicePrincipalV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/aws_endpoint_service_principal_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsEndpointServicePrincipalV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_aws_endpoint_service_principal_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/resources/aws_endpoint_service_principal_v2 instaclustr_aws_endpoint_service_principal_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsEndpointServicePrincipalV2Config
  */
  public constructor(scope: Construct, id: string, config: AwsEndpointServicePrincipalV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_aws_endpoint_service_principal_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.38',
        providerVersionConstraint: '2.1.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterDataCenterId = config.clusterDataCenterId;
    this._endPointServiceId = config.endPointServiceId;
    this._id = config.id;
    this._principalArn = config.principalArn;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_data_center_id - computed: false, optional: false, required: true
  private _clusterDataCenterId?: string; 
  public get clusterDataCenterId() {
    return this.getStringAttribute('cluster_data_center_id');
  }
  public set clusterDataCenterId(value: string) {
    this._clusterDataCenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDataCenterIdInput() {
    return this._clusterDataCenterId;
  }

  // end_point_service_id - computed: true, optional: true, required: false
  private _endPointServiceId?: string; 
  public get endPointServiceId() {
    return this.getStringAttribute('end_point_service_id');
  }
  public set endPointServiceId(value: string) {
    this._endPointServiceId = value;
  }
  public resetEndPointServiceId() {
    this._endPointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceIdInput() {
    return this._endPointServiceId;
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

  // principal_arn - computed: false, optional: false, required: true
  private _principalArn?: string; 
  public get principalArn() {
    return this.getStringAttribute('principal_arn');
  }
  public set principalArn(value: string) {
    this._principalArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalArnInput() {
    return this._principalArn;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsEndpointServicePrincipalV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsEndpointServicePrincipalV2Timeouts) {
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
      cluster_data_center_id: cdktf.stringToTerraform(this._clusterDataCenterId),
      end_point_service_id: cdktf.stringToTerraform(this._endPointServiceId),
      id: cdktf.stringToTerraform(this._id),
      principal_arn: cdktf.stringToTerraform(this._principalArn),
      timeouts: awsEndpointServicePrincipalV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_data_center_id: {
        value: cdktf.stringToHclTerraform(this._clusterDataCenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_point_service_id: {
        value: cdktf.stringToHclTerraform(this._endPointServiceId),
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
      principal_arn: {
        value: cdktf.stringToHclTerraform(this._principalArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: awsEndpointServicePrincipalV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsEndpointServicePrincipalV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
