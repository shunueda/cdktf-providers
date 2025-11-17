// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/yq_monitoring_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface YqMonitoringConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/yq_monitoring_connection#description YqMonitoringConnection#description}
  */
  readonly description?: string;
  /**
  * The folder identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/yq_monitoring_connection#folder_id YqMonitoringConnection#folder_id}
  */
  readonly folderId?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/yq_monitoring_connection#name YqMonitoringConnection#name}
  */
  readonly name: string;
  /**
  * The service account ID to access resources on behalf of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/yq_monitoring_connection#service_account_id YqMonitoringConnection#service_account_id}
  */
  readonly serviceAccountId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/yq_monitoring_connection yandex_yq_monitoring_connection}
*/
export class YqMonitoringConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_yq_monitoring_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a YqMonitoringConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the YqMonitoringConnection to import
  * @param importFromId The id of the existing YqMonitoringConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/yq_monitoring_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the YqMonitoringConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_yq_monitoring_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/yq_monitoring_connection yandex_yq_monitoring_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options YqMonitoringConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: YqMonitoringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_yq_monitoring_connection',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._folderId = config.folderId;
    this._name = config.name;
    this._serviceAccountId = config.serviceAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_id - computed: true, optional: false, required: false
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }

  // description - computed: true, optional: true, required: false
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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      name: cdktf.stringToTerraform(this._name),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
