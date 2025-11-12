// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/wlms_wls_domain_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciWlmsWlsDomainServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/wlms_wls_domain_server#id DataOciWlmsWlsDomainServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/wlms_wls_domain_server#server_id DataOciWlmsWlsDomainServer#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/wlms_wls_domain_server#wls_domain_id DataOciWlmsWlsDomainServer#wls_domain_id}
  */
  readonly wlsDomainId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/wlms_wls_domain_server oci_wlms_wls_domain_server}
*/
export class DataOciWlmsWlsDomainServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_wlms_wls_domain_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciWlmsWlsDomainServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciWlmsWlsDomainServer to import
  * @param importFromId The id of the existing DataOciWlmsWlsDomainServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/wlms_wls_domain_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciWlmsWlsDomainServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_wlms_wls_domain_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/wlms_wls_domain_server oci_wlms_wls_domain_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciWlmsWlsDomainServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciWlmsWlsDomainServerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_wlms_wls_domain_server',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._serverId = config.serverId;
    this._wlsDomainId = config.wlsDomainId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
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

  // is_admin - computed: true, optional: false, required: false
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }

  // jdk_path - computed: true, optional: false, required: false
  public get jdkPath() {
    return this.getStringAttribute('jdk_path');
  }

  // jdk_version - computed: true, optional: false, required: false
  public get jdkVersion() {
    return this.getStringAttribute('jdk_version');
  }

  // latest_patches_status - computed: true, optional: false, required: false
  public get latestPatchesStatus() {
    return this.getStringAttribute('latest_patches_status');
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }

  // middleware_path - computed: true, optional: false, required: false
  public get middlewarePath() {
    return this.getStringAttribute('middleware_path');
  }

  // middleware_type - computed: true, optional: false, required: false
  public get middlewareType() {
    return this.getStringAttribute('middleware_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // patch_readiness_status - computed: true, optional: false, required: false
  public get patchReadinessStatus() {
    return this.getStringAttribute('patch_readiness_status');
  }

  // restart_order - computed: true, optional: false, required: false
  public get restartOrder() {
    return this.getNumberAttribute('restart_order');
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // weblogic_version - computed: true, optional: false, required: false
  public get weblogicVersion() {
    return this.getStringAttribute('weblogic_version');
  }

  // wls_domain_id - computed: false, optional: false, required: true
  private _wlsDomainId?: string; 
  public get wlsDomainId() {
    return this.getStringAttribute('wls_domain_id');
  }
  public set wlsDomainId(value: string) {
    this._wlsDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wlsDomainIdInput() {
    return this._wlsDomainId;
  }

  // wls_domain_name - computed: true, optional: false, required: false
  public get wlsDomainName() {
    return this.getStringAttribute('wls_domain_name');
  }

  // wls_domain_path - computed: true, optional: false, required: false
  public get wlsDomainPath() {
    return this.getStringAttribute('wls_domain_path');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      server_id: cdktf.stringToTerraform(this._serverId),
      wls_domain_id: cdktf.stringToTerraform(this._wlsDomainId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wls_domain_id: {
        value: cdktf.stringToHclTerraform(this._wlsDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
