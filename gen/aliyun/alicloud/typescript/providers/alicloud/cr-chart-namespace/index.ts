// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chart_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CrChartNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chart_namespace#auto_create_repo CrChartNamespace#auto_create_repo}
  */
  readonly autoCreateRepo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chart_namespace#default_repo_type CrChartNamespace#default_repo_type}
  */
  readonly defaultRepoType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chart_namespace#id CrChartNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chart_namespace#instance_id CrChartNamespace#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chart_namespace#namespace_name CrChartNamespace#namespace_name}
  */
  readonly namespaceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chart_namespace alicloud_cr_chart_namespace}
*/
export class CrChartNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cr_chart_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CrChartNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CrChartNamespace to import
  * @param importFromId The id of the existing CrChartNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chart_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CrChartNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cr_chart_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chart_namespace alicloud_cr_chart_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CrChartNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: CrChartNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cr_chart_namespace',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreateRepo = config.autoCreateRepo;
    this._defaultRepoType = config.defaultRepoType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._namespaceName = config.namespaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_repo - computed: true, optional: true, required: false
  private _autoCreateRepo?: boolean | cdktf.IResolvable; 
  public get autoCreateRepo() {
    return this.getBooleanAttribute('auto_create_repo');
  }
  public set autoCreateRepo(value: boolean | cdktf.IResolvable) {
    this._autoCreateRepo = value;
  }
  public resetAutoCreateRepo() {
    this._autoCreateRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateRepoInput() {
    return this._autoCreateRepo;
  }

  // default_repo_type - computed: true, optional: true, required: false
  private _defaultRepoType?: string; 
  public get defaultRepoType() {
    return this.getStringAttribute('default_repo_type');
  }
  public set defaultRepoType(value: string) {
    this._defaultRepoType = value;
  }
  public resetDefaultRepoType() {
    this._defaultRepoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRepoTypeInput() {
    return this._defaultRepoType;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_repo: cdktf.booleanToTerraform(this._autoCreateRepo),
      default_repo_type: cdktf.stringToTerraform(this._defaultRepoType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_repo: {
        value: cdktf.booleanToHclTerraform(this._autoCreateRepo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_repo_type: {
        value: cdktf.stringToHclTerraform(this._defaultRepoType),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_name: {
        value: cdktf.stringToHclTerraform(this._namespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
