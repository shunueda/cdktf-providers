// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RotatedSecretSyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * JQ expression to filter or transform the secret value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_sync#filter_secret_value RotatedSecretSync#filter_secret_value}
  */
  readonly filterSecretValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_sync#id RotatedSecretSync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rotated Secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_sync#name RotatedSecretSync#name}
  */
  readonly name: string;
  /**
  * Vault namespace, releavnt only for Hashicorp Vault Target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_sync#namespace RotatedSecretSync#namespace}
  */
  readonly namespace?: string;
  /**
  * Remote Secret Name that will be synced on the remote endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_sync#remote_secret_name RotatedSecretSync#remote_secret_name}
  */
  readonly remoteSecretName: string;
  /**
  * Universal Secret Connector name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_sync#usc_name RotatedSecretSync#usc_name}
  */
  readonly uscName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_sync akeyless_rotated_secret_sync}
*/
export class RotatedSecretSync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_rotated_secret_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RotatedSecretSync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RotatedSecretSync to import
  * @param importFromId The id of the existing RotatedSecretSync that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RotatedSecretSync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_rotated_secret_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_sync akeyless_rotated_secret_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RotatedSecretSyncConfig
  */
  public constructor(scope: Construct, id: string, config: RotatedSecretSyncConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_rotated_secret_sync',
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
    this._filterSecretValue = config.filterSecretValue;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._remoteSecretName = config.remoteSecretName;
    this._uscName = config.uscName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_secret_value - computed: false, optional: true, required: false
  private _filterSecretValue?: string; 
  public get filterSecretValue() {
    return this.getStringAttribute('filter_secret_value');
  }
  public set filterSecretValue(value: string) {
    this._filterSecretValue = value;
  }
  public resetFilterSecretValue() {
    this._filterSecretValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSecretValueInput() {
    return this._filterSecretValue;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // remote_secret_name - computed: false, optional: false, required: true
  private _remoteSecretName?: string; 
  public get remoteSecretName() {
    return this.getStringAttribute('remote_secret_name');
  }
  public set remoteSecretName(value: string) {
    this._remoteSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSecretNameInput() {
    return this._remoteSecretName;
  }

  // usc_name - computed: false, optional: false, required: true
  private _uscName?: string; 
  public get uscName() {
    return this.getStringAttribute('usc_name');
  }
  public set uscName(value: string) {
    this._uscName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uscNameInput() {
    return this._uscName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_secret_value: cdktf.stringToTerraform(this._filterSecretValue),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      remote_secret_name: cdktf.stringToTerraform(this._remoteSecretName),
      usc_name: cdktf.stringToTerraform(this._uscName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_secret_value: {
        value: cdktf.stringToHclTerraform(this._filterSecretValue),
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
      remote_secret_name: {
        value: cdktf.stringToHclTerraform(this._remoteSecretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usc_name: {
        value: cdktf.stringToHclTerraform(this._uscName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
