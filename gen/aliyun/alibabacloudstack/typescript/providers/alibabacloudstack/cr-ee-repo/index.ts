// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cr_ee_repo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CrEeRepoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cr_ee_repo#detail CrEeRepo#detail}
  */
  readonly detail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cr_ee_repo#id CrEeRepo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cr_ee_repo#instance_id CrEeRepo#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cr_ee_repo#name CrEeRepo#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cr_ee_repo#namespace CrEeRepo#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cr_ee_repo#repo_type CrEeRepo#repo_type}
  */
  readonly repoType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cr_ee_repo#summary CrEeRepo#summary}
  */
  readonly summary: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cr_ee_repo alibabacloudstack_cr_ee_repo}
*/
export class CrEeRepo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cr_ee_repo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CrEeRepo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CrEeRepo to import
  * @param importFromId The id of the existing CrEeRepo that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cr_ee_repo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CrEeRepo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cr_ee_repo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cr_ee_repo alibabacloudstack_cr_ee_repo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CrEeRepoConfig
  */
  public constructor(scope: Construct, id: string, config: CrEeRepoConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cr_ee_repo',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._detail = config.detail;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._namespace = config.namespace;
    this._repoType = config.repoType;
    this._summary = config.summary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detail - computed: false, optional: true, required: false
  private _detail?: string; 
  public get detail() {
    return this.getStringAttribute('detail');
  }
  public set detail(value: string) {
    this._detail = value;
  }
  public resetDetail() {
    this._detail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // repo_type - computed: false, optional: false, required: true
  private _repoType?: string; 
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }
  public set repoType(value: string) {
    this._repoType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTypeInput() {
    return this._repoType;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detail: cdktf.stringToTerraform(this._detail),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      repo_type: cdktf.stringToTerraform(this._repoType),
      summary: cdktf.stringToTerraform(this._summary),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      detail: {
        value: cdktf.stringToHclTerraform(this._detail),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_type: {
        value: cdktf.stringToHclTerraform(this._repoType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summary: {
        value: cdktf.stringToHclTerraform(this._summary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
