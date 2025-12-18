// https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access mode, must be `"ReadWrite"` (default) or `"Read"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_project#mode GcpProject#mode}
  */
  readonly mode?: string;
  /**
  * Display name for the GCP project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_project#name GcpProject#name}
  */
  readonly name: string;
  /**
  * ID of the GCP organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_project#organization_id GcpProject#organization_id}
  */
  readonly organizationId: string;
  /**
  * ID of the GCP project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_project#project_id GcpProject#project_id}
  */
  readonly projectId: string;
  /**
  * Email address of the service account to be impersonated by CloudSecure to manage this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_project#service_account_email GcpProject#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_project illumio-cloudsecure_gcp_project}
*/
export class GcpProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-cloudsecure_gcp_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpProject to import
  * @param importFromId The id of the existing GcpProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-cloudsecure_gcp_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/gcp_project illumio-cloudsecure_gcp_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpProjectConfig
  */
  public constructor(scope: Construct, id: string, config: GcpProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-cloudsecure_gcp_project',
      terraformGeneratorMetadata: {
        providerName: 'illumio-cloudsecure',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._mode = config.mode;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
    this._serviceAccountEmail = config.serviceAccountEmail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_email: {
        value: cdktf.stringToHclTerraform(this._serviceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
