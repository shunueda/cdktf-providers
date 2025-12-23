// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/k8s_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable DCF policies in K8s clusters. Can only be true if enable_k8s is also true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/k8s_config#enable_dcf_policies K8SConfig#enable_dcf_policies}
  */
  readonly enableDcfPolicies?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable K8s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/k8s_config#enable_k8s K8SConfig#enable_k8s}
  */
  readonly enableK8S?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/k8s_config#id K8SConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/k8s_config aviatrix_k8s_config}
*/
export class K8SConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_k8s_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SConfig to import
  * @param importFromId The id of the existing K8SConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/k8s_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_k8s_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/k8s_config aviatrix_k8s_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: K8SConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_k8s_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDcfPolicies = config.enableDcfPolicies;
    this._enableK8S = config.enableK8S;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_dcf_policies - computed: false, optional: true, required: false
  private _enableDcfPolicies?: boolean | cdktf.IResolvable; 
  public get enableDcfPolicies() {
    return this.getBooleanAttribute('enable_dcf_policies');
  }
  public set enableDcfPolicies(value: boolean | cdktf.IResolvable) {
    this._enableDcfPolicies = value;
  }
  public resetEnableDcfPolicies() {
    this._enableDcfPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDcfPoliciesInput() {
    return this._enableDcfPolicies;
  }

  // enable_k8s - computed: false, optional: true, required: false
  private _enableK8S?: boolean | cdktf.IResolvable; 
  public get enableK8S() {
    return this.getBooleanAttribute('enable_k8s');
  }
  public set enableK8S(value: boolean | cdktf.IResolvable) {
    this._enableK8S = value;
  }
  public resetEnableK8S() {
    this._enableK8S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableK8SInput() {
    return this._enableK8S;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_dcf_policies: cdktf.booleanToTerraform(this._enableDcfPolicies),
      enable_k8s: cdktf.booleanToTerraform(this._enableK8S),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_dcf_policies: {
        value: cdktf.booleanToHclTerraform(this._enableDcfPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_k8s: {
        value: cdktf.booleanToHclTerraform(this._enableK8S),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
