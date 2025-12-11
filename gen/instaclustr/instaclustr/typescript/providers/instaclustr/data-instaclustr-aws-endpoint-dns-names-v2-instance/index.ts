// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/aws_endpoint_dns_names_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrAwsEndpointDnsNamesV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS Endpoint DNS Names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/aws_endpoint_dns_names_v2_instance#aws_endpoint_dns_names DataInstaclustrAwsEndpointDnsNamesV2Instance#aws_endpoint_dns_names}
  */
  readonly awsEndpointDnsNames?: string[];
  /**
  * ID of the cluster data center
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/aws_endpoint_dns_names_v2_instance#cluster_data_center_id DataInstaclustrAwsEndpointDnsNamesV2Instance#cluster_data_center_id}
  */
  readonly clusterDataCenterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/aws_endpoint_dns_names_v2_instance#id DataInstaclustrAwsEndpointDnsNamesV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/aws_endpoint_dns_names_v2_instance instaclustr_aws_endpoint_dns_names_v2_instance}
*/
export class DataInstaclustrAwsEndpointDnsNamesV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_aws_endpoint_dns_names_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrAwsEndpointDnsNamesV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrAwsEndpointDnsNamesV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrAwsEndpointDnsNamesV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/aws_endpoint_dns_names_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrAwsEndpointDnsNamesV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_aws_endpoint_dns_names_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/aws_endpoint_dns_names_v2_instance instaclustr_aws_endpoint_dns_names_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrAwsEndpointDnsNamesV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrAwsEndpointDnsNamesV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_aws_endpoint_dns_names_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.35',
        providerVersionConstraint: '2.1.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsEndpointDnsNames = config.awsEndpointDnsNames;
    this._clusterDataCenterId = config.clusterDataCenterId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_endpoint_dns_names - computed: true, optional: true, required: false
  private _awsEndpointDnsNames?: string[]; 
  public get awsEndpointDnsNames() {
    return this.getListAttribute('aws_endpoint_dns_names');
  }
  public set awsEndpointDnsNames(value: string[]) {
    this._awsEndpointDnsNames = value;
  }
  public resetAwsEndpointDnsNames() {
    this._awsEndpointDnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEndpointDnsNamesInput() {
    return this._awsEndpointDnsNames;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_endpoint_dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsEndpointDnsNames),
      cluster_data_center_id: cdktf.stringToTerraform(this._clusterDataCenterId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_endpoint_dns_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsEndpointDnsNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cluster_data_center_id: {
        value: cdktf.stringToHclTerraform(this._clusterDataCenterId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
