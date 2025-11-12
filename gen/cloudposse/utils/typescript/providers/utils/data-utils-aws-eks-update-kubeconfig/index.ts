// https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUtilsAwsEksUpdateKubeconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alias for the cluster context name. Defaults to match cluster ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#alias DataUtilsAwsEksUpdateKubeconfig#alias}
  */
  readonly alias?: string;
  /**
  * EKS cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#cluster_name DataUtilsAwsEksUpdateKubeconfig#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Component name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#component DataUtilsAwsEksUpdateKubeconfig#component}
  */
  readonly component?: string;
  /**
  * Map of ENV vars in the format 'key=value'. These ENV vars will be set before executing the data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#env DataUtilsAwsEksUpdateKubeconfig#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#environment DataUtilsAwsEksUpdateKubeconfig#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#id DataUtilsAwsEksUpdateKubeconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * kubeconfig file path to write the kubeconfig to. By default, the configuration is written to the first file path in the KUBECONFIG environment variable (if it is set) or the default kubeconfig path (.kube/config) in your home directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#kubeconfig DataUtilsAwsEksUpdateKubeconfig#kubeconfig}
  */
  readonly kubeconfig?: string;
  /**
  * AWS profile to use for cluster authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#profile DataUtilsAwsEksUpdateKubeconfig#profile}
  */
  readonly profile?: string;
  /**
  * AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#region DataUtilsAwsEksUpdateKubeconfig#region}
  */
  readonly region?: string;
  /**
  * IAM role to assume for cluster authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#role_arn DataUtilsAwsEksUpdateKubeconfig#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Stack name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#stack DataUtilsAwsEksUpdateKubeconfig#stack}
  */
  readonly stack?: string;
  /**
  * Stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#stage DataUtilsAwsEksUpdateKubeconfig#stage}
  */
  readonly stage?: string;
  /**
  * Tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#tenant DataUtilsAwsEksUpdateKubeconfig#tenant}
  */
  readonly tenant?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig utils_aws_eks_update_kubeconfig}
*/
export class DataUtilsAwsEksUpdateKubeconfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "utils_aws_eks_update_kubeconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUtilsAwsEksUpdateKubeconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUtilsAwsEksUpdateKubeconfig to import
  * @param importFromId The id of the existing DataUtilsAwsEksUpdateKubeconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUtilsAwsEksUpdateKubeconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "utils_aws_eks_update_kubeconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/aws_eks_update_kubeconfig utils_aws_eks_update_kubeconfig} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUtilsAwsEksUpdateKubeconfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUtilsAwsEksUpdateKubeconfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'utils_aws_eks_update_kubeconfig',
      terraformGeneratorMetadata: {
        providerName: 'utils',
        providerVersion: '1.31.0',
        providerVersionConstraint: '1.31.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._clusterName = config.clusterName;
    this._component = config.component;
    this._env = config.env;
    this._environment = config.environment;
    this._id = config.id;
    this._kubeconfig = config.kubeconfig;
    this._profile = config.profile;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._stack = config.stack;
    this._stage = config.stage;
    this._tenant = config.tenant;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // component - computed: false, optional: true, required: false
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // kubeconfig - computed: false, optional: true, required: false
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  public resetKubeconfig() {
    this._kubeconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stack - computed: false, optional: true, required: false
  private _stack?: string; 
  public get stack() {
    return this.getStringAttribute('stack');
  }
  public set stack(value: string) {
    this._stack = value;
  }
  public resetStack() {
    this._stack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInput() {
    return this._stack;
  }

  // stage - computed: false, optional: true, required: false
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      component: cdktf.stringToTerraform(this._component),
      env: cdktf.hashMapper(cdktf.stringToTerraform)(this._env),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      kubeconfig: cdktf.stringToTerraform(this._kubeconfig),
      profile: cdktf.stringToTerraform(this._profile),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      stack: cdktf.stringToTerraform(this._stack),
      stage: cdktf.stringToTerraform(this._stage),
      tenant: cdktf.stringToTerraform(this._tenant),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component: {
        value: cdktf.stringToHclTerraform(this._component),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._env),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      kubeconfig: {
        value: cdktf.stringToHclTerraform(this._kubeconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack: {
        value: cdktf.stringToHclTerraform(this._stack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage: {
        value: cdktf.stringToHclTerraform(this._stage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
