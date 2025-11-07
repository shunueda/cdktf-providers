// https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_namespace_visibility
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubearmorNamespaceVisibilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_namespace_visibility#capabilities KubearmorNamespaceVisibility#capabilities}
  */
  readonly capabilities: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_namespace_visibility#file KubearmorNamespaceVisibility#file}
  */
  readonly file: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_namespace_visibility#id KubearmorNamespaceVisibility#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_namespace_visibility#last_updated KubearmorNamespaceVisibility#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_namespace_visibility#namespace KubearmorNamespaceVisibility#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_namespace_visibility#network KubearmorNamespaceVisibility#network}
  */
  readonly network: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_namespace_visibility#process KubearmorNamespaceVisibility#process}
  */
  readonly process: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_namespace_visibility accuknox_kubearmor_namespace_visibility}
*/
export class KubearmorNamespaceVisibility extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "accuknox_kubearmor_namespace_visibility";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubearmorNamespaceVisibility resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubearmorNamespaceVisibility to import
  * @param importFromId The id of the existing KubearmorNamespaceVisibility that should be imported. Refer to the {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_namespace_visibility#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubearmorNamespaceVisibility to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "accuknox_kubearmor_namespace_visibility", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_namespace_visibility accuknox_kubearmor_namespace_visibility} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubearmorNamespaceVisibilityConfig
  */
  public constructor(scope: Construct, id: string, config: KubearmorNamespaceVisibilityConfig) {
    super(scope, id, {
      terraformResourceType: 'accuknox_kubearmor_namespace_visibility',
      terraformGeneratorMetadata: {
        providerName: 'accuknox',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capabilities = config.capabilities;
    this._file = config.file;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._namespace = config.namespace;
    this._network = config.network;
    this._process = config.process;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: false, optional: false, required: true
  private _capabilities?: boolean | cdktf.IResolvable; 
  public get capabilities() {
    return this.getBooleanAttribute('capabilities');
  }
  public set capabilities(value: boolean | cdktf.IResolvable) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // file - computed: false, optional: false, required: true
  private _file?: boolean | cdktf.IResolvable; 
  public get file() {
    return this.getBooleanAttribute('file');
  }
  public set file(value: boolean | cdktf.IResolvable) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
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

  // network - computed: false, optional: false, required: true
  private _network?: boolean | cdktf.IResolvable; 
  public get network() {
    return this.getBooleanAttribute('network');
  }
  public set network(value: boolean | cdktf.IResolvable) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // process - computed: false, optional: false, required: true
  private _process?: boolean | cdktf.IResolvable; 
  public get process() {
    return this.getBooleanAttribute('process');
  }
  public set process(value: boolean | cdktf.IResolvable) {
    this._process = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processInput() {
    return this._process;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capabilities: cdktf.booleanToTerraform(this._capabilities),
      file: cdktf.booleanToTerraform(this._file),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      namespace: cdktf.stringToTerraform(this._namespace),
      network: cdktf.booleanToTerraform(this._network),
      process: cdktf.booleanToTerraform(this._process),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capabilities: {
        value: cdktf.booleanToHclTerraform(this._capabilities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file: {
        value: cdktf.booleanToHclTerraform(this._file),
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
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
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
      network: {
        value: cdktf.booleanToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      process: {
        value: cdktf.booleanToHclTerraform(this._process),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
