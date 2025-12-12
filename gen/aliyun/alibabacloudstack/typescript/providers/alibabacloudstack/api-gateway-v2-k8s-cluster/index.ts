// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_k8s_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayV2K8SClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_k8s_cluster#config_content ApiGatewayV2K8SCluster#config_content}
  */
  readonly configContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_k8s_cluster#cs_cluster_id ApiGatewayV2K8SCluster#cs_cluster_id}
  */
  readonly csClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_k8s_cluster#id ApiGatewayV2K8SCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_k8s_cluster#k8s_cluster_name ApiGatewayV2K8SCluster#k8s_cluster_name}
  */
  readonly k8SClusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_k8s_cluster#vpc_id ApiGatewayV2K8SCluster#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_k8s_cluster alibabacloudstack_api_gateway_v2_k8s_cluster}
*/
export class ApiGatewayV2K8SCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_api_gateway_v2_k8s_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayV2K8SCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayV2K8SCluster to import
  * @param importFromId The id of the existing ApiGatewayV2K8SCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_k8s_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayV2K8SCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_api_gateway_v2_k8s_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_k8s_cluster alibabacloudstack_api_gateway_v2_k8s_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayV2K8SClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayV2K8SClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_api_gateway_v2_k8s_cluster',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configContent = config.configContent;
    this._csClusterId = config.csClusterId;
    this._id = config.id;
    this._k8SClusterName = config.k8SClusterName;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // config_content - computed: false, optional: true, required: false
  private _configContent?: string; 
  public get configContent() {
    return this.getStringAttribute('config_content');
  }
  public set configContent(value: string) {
    this._configContent = value;
  }
  public resetConfigContent() {
    this._configContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContentInput() {
    return this._configContent;
  }

  // cs_cluster_id - computed: false, optional: true, required: false
  private _csClusterId?: string; 
  public get csClusterId() {
    return this.getStringAttribute('cs_cluster_id');
  }
  public set csClusterId(value: string) {
    this._csClusterId = value;
  }
  public resetCsClusterId() {
    this._csClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csClusterIdInput() {
    return this._csClusterId;
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

  // k8s_cluster_name - computed: false, optional: false, required: true
  private _k8SClusterName?: string; 
  public get k8SClusterName() {
    return this.getStringAttribute('k8s_cluster_name');
  }
  public set k8SClusterName(value: string) {
    this._k8SClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterNameInput() {
    return this._k8SClusterName;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_content: cdktf.stringToTerraform(this._configContent),
      cs_cluster_id: cdktf.stringToTerraform(this._csClusterId),
      id: cdktf.stringToTerraform(this._id),
      k8s_cluster_name: cdktf.stringToTerraform(this._k8SClusterName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_content: {
        value: cdktf.stringToHclTerraform(this._configContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cs_cluster_id: {
        value: cdktf.stringToHclTerraform(this._csClusterId),
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
      k8s_cluster_name: {
        value: cdktf.stringToHclTerraform(this._k8SClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
