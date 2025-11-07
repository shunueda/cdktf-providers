// https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/kube_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKopsKubeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/kube_config#admin DataKopsKubeConfig#admin}
  */
  readonly admin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/kube_config#cluster_name DataKopsKubeConfig#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/kube_config#id DataKopsKubeConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/kube_config#internal DataKopsKubeConfig#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/kube_config kops_kube_config}
*/
export class DataKopsKubeConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kops_kube_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKopsKubeConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKopsKubeConfig to import
  * @param importFromId The id of the existing DataKopsKubeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/kube_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKopsKubeConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kops_kube_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/kube_config kops_kube_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKopsKubeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataKopsKubeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'kops_kube_config',
      terraformGeneratorMetadata: {
        providerName: 'kops',
        providerVersion: '1.25.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admin = config.admin;
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._internal = config.internal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin - computed: true, optional: true, required: false
  private _admin?: number; 
  public get admin() {
    return this.getNumberAttribute('admin');
  }
  public set admin(value: number) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // ca_certs - computed: true, optional: false, required: false
  public get caCerts() {
    return this.getStringAttribute('ca_certs');
  }

  // client_cert - computed: true, optional: false, required: false
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
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

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable; 
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // kube_password - computed: true, optional: false, required: false
  public get kubePassword() {
    return this.getStringAttribute('kube_password');
  }

  // kube_user - computed: true, optional: false, required: false
  public get kubeUser() {
    return this.getStringAttribute('kube_user');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin: cdktf.numberToTerraform(this._admin),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      internal: cdktf.booleanToTerraform(this._internal),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin: {
        value: cdktf.numberToHclTerraform(this._admin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      internal: {
        value: cdktf.booleanToHclTerraform(this._internal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
