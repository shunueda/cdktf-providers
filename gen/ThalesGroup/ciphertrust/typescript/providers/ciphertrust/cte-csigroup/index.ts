// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_csigroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CteCsigroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * ClientProfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_csigroup#client_profile CteCsigroup#client_profile}
  */
  readonly clientProfile?: string;
  /**
  * (Updateable) CSIGroup description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_csigroup#description CteCsigroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_csigroup#id CteCsigroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * K8sNamespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_csigroup#k8s_namespace CteCsigroup#k8s_namespace}
  */
  readonly k8SNamespace: string;
  /**
  * K8sStorageClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_csigroup#k8s_storage_class CteCsigroup#k8s_storage_class}
  */
  readonly k8SStorageClass: string;
  /**
  * Name of CSIGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_csigroup#name CteCsigroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_csigroup ciphertrust_cte_csigroup}
*/
export class CteCsigroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_cte_csigroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CteCsigroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CteCsigroup to import
  * @param importFromId The id of the existing CteCsigroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_csigroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CteCsigroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_cte_csigroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_csigroup ciphertrust_cte_csigroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CteCsigroupConfig
  */
  public constructor(scope: Construct, id: string, config: CteCsigroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_cte_csigroup',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientProfile = config.clientProfile;
    this._description = config.description;
    this._id = config.id;
    this._k8SNamespace = config.k8SNamespace;
    this._k8SStorageClass = config.k8SStorageClass;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_profile - computed: false, optional: true, required: false
  private _clientProfile?: string; 
  public get clientProfile() {
    return this.getStringAttribute('client_profile');
  }
  public set clientProfile(value: string) {
    this._clientProfile = value;
  }
  public resetClientProfile() {
    this._clientProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileInput() {
    return this._clientProfile;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // k8s_namespace - computed: false, optional: false, required: true
  private _k8SNamespace?: string; 
  public get k8SNamespace() {
    return this.getStringAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: string) {
    this._k8SNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
  }

  // k8s_storage_class - computed: false, optional: false, required: true
  private _k8SStorageClass?: string; 
  public get k8SStorageClass() {
    return this.getStringAttribute('k8s_storage_class');
  }
  public set k8SStorageClass(value: string) {
    this._k8SStorageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SStorageClassInput() {
    return this._k8SStorageClass;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_profile: cdktf.stringToTerraform(this._clientProfile),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      k8s_namespace: cdktf.stringToTerraform(this._k8SNamespace),
      k8s_storage_class: cdktf.stringToTerraform(this._k8SStorageClass),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_profile: {
        value: cdktf.stringToHclTerraform(this._clientProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      k8s_namespace: {
        value: cdktf.stringToHclTerraform(this._k8SNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_storage_class: {
        value: cdktf.stringToHclTerraform(this._k8SStorageClass),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
