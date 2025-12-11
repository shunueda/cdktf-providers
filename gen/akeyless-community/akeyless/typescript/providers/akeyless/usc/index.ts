// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/usc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UscConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure Key Vault name (Relevant only for Azure targets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/usc#azure_kv_name Usc#azure_kv_name}
  */
  readonly azureKvName?: string;
  /**
  * Protection from accidental deletion of this object, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/usc#delete_protection Usc#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * Description of the Universal Secrets Connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/usc#description Usc#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/usc#id Usc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * K8s namespace (Relevant to Kubernetes targets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/usc#k8s_namespace Usc#k8s_namespace}
  */
  readonly k8SNamespace?: string;
  /**
  * Universal Secrets Connector name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/usc#name Usc#name}
  */
  readonly name: string;
  /**
  * List of the tags attached to this Universal Secrets Connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/usc#tags Usc#tags}
  */
  readonly tags?: string[];
  /**
  * Target Universal Secrets Connector to connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/usc#target_to_associate Usc#target_to_associate}
  */
  readonly targetToAssociate: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/usc akeyless_usc}
*/
export class Usc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_usc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Usc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Usc to import
  * @param importFromId The id of the existing Usc that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/usc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Usc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_usc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/usc akeyless_usc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UscConfig
  */
  public constructor(scope: Construct, id: string, config: UscConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_usc',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureKvName = config.azureKvName;
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._id = config.id;
    this._k8SNamespace = config.k8SNamespace;
    this._name = config.name;
    this._tags = config.tags;
    this._targetToAssociate = config.targetToAssociate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_kv_name - computed: false, optional: true, required: false
  private _azureKvName?: string; 
  public get azureKvName() {
    return this.getStringAttribute('azure_kv_name');
  }
  public set azureKvName(value: string) {
    this._azureKvName = value;
  }
  public resetAzureKvName() {
    this._azureKvName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKvNameInput() {
    return this._azureKvName;
  }

  // delete_protection - computed: true, optional: true, required: false
  private _deleteProtection?: string; 
  public get deleteProtection() {
    return this.getStringAttribute('delete_protection');
  }
  public set deleteProtection(value: string) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // k8s_namespace - computed: false, optional: true, required: false
  private _k8SNamespace?: string; 
  public get k8SNamespace() {
    return this.getStringAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: string) {
    this._k8SNamespace = value;
  }
  public resetK8SNamespace() {
    this._k8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_to_associate - computed: false, optional: false, required: true
  private _targetToAssociate?: string; 
  public get targetToAssociate() {
    return this.getStringAttribute('target_to_associate');
  }
  public set targetToAssociate(value: string) {
    this._targetToAssociate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetToAssociateInput() {
    return this._targetToAssociate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_kv_name: cdktf.stringToTerraform(this._azureKvName),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      k8s_namespace: cdktf.stringToTerraform(this._k8SNamespace),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_to_associate: cdktf.stringToTerraform(this._targetToAssociate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_kv_name: {
        value: cdktf.stringToHclTerraform(this._azureKvName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.stringToHclTerraform(this._deleteProtection),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_to_associate: {
        value: cdktf.stringToHclTerraform(this._targetToAssociate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
