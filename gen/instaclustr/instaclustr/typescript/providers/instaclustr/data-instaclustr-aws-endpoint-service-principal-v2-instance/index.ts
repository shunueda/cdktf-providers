// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/aws_endpoint_service_principal_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrAwsEndpointServicePrincipalV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/aws_endpoint_service_principal_v2_instance#cluster_data_center_id DataInstaclustrAwsEndpointServicePrincipalV2Instance#cluster_data_center_id}
  */
  readonly clusterDataCenterId?: string;
  /**
  * The Instaclustr ID of the AWS endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/aws_endpoint_service_principal_v2_instance#end_point_service_id DataInstaclustrAwsEndpointServicePrincipalV2Instance#end_point_service_id}
  */
  readonly endPointServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/aws_endpoint_service_principal_v2_instance#id DataInstaclustrAwsEndpointServicePrincipalV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The IAM Principal ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/aws_endpoint_service_principal_v2_instance#principal_arn DataInstaclustrAwsEndpointServicePrincipalV2Instance#principal_arn}
  */
  readonly principalArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/aws_endpoint_service_principal_v2_instance instaclustr_aws_endpoint_service_principal_v2_instance}
*/
export class DataInstaclustrAwsEndpointServicePrincipalV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_aws_endpoint_service_principal_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrAwsEndpointServicePrincipalV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrAwsEndpointServicePrincipalV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrAwsEndpointServicePrincipalV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/aws_endpoint_service_principal_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrAwsEndpointServicePrincipalV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_aws_endpoint_service_principal_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/aws_endpoint_service_principal_v2_instance instaclustr_aws_endpoint_service_principal_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrAwsEndpointServicePrincipalV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrAwsEndpointServicePrincipalV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_aws_endpoint_service_principal_v2_instance',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_data_center_id - computed: true, optional: true, required: false
  private _clusterDataCenterId?: string; 
  public get clusterDataCenterId() {
    return this.getStringAttribute('cluster_data_center_id');
  }
  public set clusterDataCenterId(value: string) {
    this._clusterDataCenterId = value;
  }
  public resetClusterDataCenterId() {
    this._clusterDataCenterId = undefined;
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

  // principal_arn - computed: true, optional: true, required: false
  private _principalArn?: string; 
  public get principalArn() {
    return this.getStringAttribute('principal_arn');
  }
  public set principalArn(value: string) {
    this._principalArn = value;
  }
  public resetPrincipalArn() {
    this._principalArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalArnInput() {
    return this._principalArn;
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
