// https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/data-sources/kustomize_documents
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubectlKustomizeDocumentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/data-sources/kustomize_documents#add_managed_by_label DataKubectlKustomizeDocuments#add_managed_by_label}
  */
  readonly addManagedByLabel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/data-sources/kustomize_documents#id DataKubectlKustomizeDocuments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/data-sources/kustomize_documents#load_restrictor DataKubectlKustomizeDocuments#load_restrictor}
  */
  readonly loadRestrictor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/data-sources/kustomize_documents#target DataKubectlKustomizeDocuments#target}
  */
  readonly target: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/data-sources/kustomize_documents kubectl_kustomize_documents}
*/
export class DataKubectlKustomizeDocuments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubectl_kustomize_documents";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKubectlKustomizeDocuments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKubectlKustomizeDocuments to import
  * @param importFromId The id of the existing DataKubectlKustomizeDocuments that should be imported. Refer to the {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/data-sources/kustomize_documents#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKubectlKustomizeDocuments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubectl_kustomize_documents", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/data-sources/kustomize_documents kubectl_kustomize_documents} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubectlKustomizeDocumentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataKubectlKustomizeDocumentsConfig) {
    super(scope, id, {
      terraformResourceType: 'kubectl_kustomize_documents',
      terraformGeneratorMetadata: {
        providerName: 'kubectl',
        providerVersion: '1.19.0',
        providerVersionConstraint: '1.19.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addManagedByLabel = config.addManagedByLabel;
    this._id = config.id;
    this._loadRestrictor = config.loadRestrictor;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_managed_by_label - computed: false, optional: true, required: false
  private _addManagedByLabel?: boolean | cdktf.IResolvable; 
  public get addManagedByLabel() {
    return this.getBooleanAttribute('add_managed_by_label');
  }
  public set addManagedByLabel(value: boolean | cdktf.IResolvable) {
    this._addManagedByLabel = value;
  }
  public resetAddManagedByLabel() {
    this._addManagedByLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addManagedByLabelInput() {
    return this._addManagedByLabel;
  }

  // documents - computed: true, optional: false, required: false
  public get documents() {
    return this.getListAttribute('documents');
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

  // load_restrictor - computed: false, optional: true, required: false
  private _loadRestrictor?: string; 
  public get loadRestrictor() {
    return this.getStringAttribute('load_restrictor');
  }
  public set loadRestrictor(value: string) {
    this._loadRestrictor = value;
  }
  public resetLoadRestrictor() {
    this._loadRestrictor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadRestrictorInput() {
    return this._loadRestrictor;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_managed_by_label: cdktf.booleanToTerraform(this._addManagedByLabel),
      id: cdktf.stringToTerraform(this._id),
      load_restrictor: cdktf.stringToTerraform(this._loadRestrictor),
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_managed_by_label: {
        value: cdktf.booleanToHclTerraform(this._addManagedByLabel),
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
      load_restrictor: {
        value: cdktf.stringToHclTerraform(this._loadRestrictor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
