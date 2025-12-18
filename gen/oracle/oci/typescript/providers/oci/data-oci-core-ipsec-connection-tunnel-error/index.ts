// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_ipsec_connection_tunnel_error
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreIpsecConnectionTunnelErrorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_ipsec_connection_tunnel_error#id DataOciCoreIpsecConnectionTunnelError#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_ipsec_connection_tunnel_error#ipsec_id DataOciCoreIpsecConnectionTunnelError#ipsec_id}
  */
  readonly ipsecId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_ipsec_connection_tunnel_error#tunnel_id DataOciCoreIpsecConnectionTunnelError#tunnel_id}
  */
  readonly tunnelId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_ipsec_connection_tunnel_error oci_core_ipsec_connection_tunnel_error}
*/
export class DataOciCoreIpsecConnectionTunnelError extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_ipsec_connection_tunnel_error";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnelError resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnelError to import
  * @param importFromId The id of the existing DataOciCoreIpsecConnectionTunnelError that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_ipsec_connection_tunnel_error#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnelError to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_ipsec_connection_tunnel_error", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_ipsec_connection_tunnel_error oci_core_ipsec_connection_tunnel_error} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreIpsecConnectionTunnelErrorConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreIpsecConnectionTunnelErrorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ipsec_connection_tunnel_error',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._ipsecId = config.ipsecId;
    this._tunnelId = config.tunnelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_description - computed: true, optional: false, required: false
  public get errorDescription() {
    return this.getStringAttribute('error_description');
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

  // ipsec_id - computed: false, optional: false, required: true
  private _ipsecId?: string; 
  public get ipsecId() {
    return this.getStringAttribute('ipsec_id');
  }
  public set ipsecId(value: string) {
    this._ipsecId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIdInput() {
    return this._ipsecId;
  }

  // oci_resources_link - computed: true, optional: false, required: false
  public get ociResourcesLink() {
    return this.getStringAttribute('oci_resources_link');
  }

  // solution - computed: true, optional: false, required: false
  public get solution() {
    return this.getStringAttribute('solution');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // tunnel_id - computed: false, optional: false, required: true
  private _tunnelId?: string; 
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }
  public set tunnelId(value: string) {
    this._tunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipsec_id: cdktf.stringToTerraform(this._ipsecId),
      tunnel_id: cdktf.stringToTerraform(this._tunnelId),
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
      ipsec_id: {
        value: cdktf.stringToHclTerraform(this._ipsecId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_id: {
        value: cdktf.stringToHclTerraform(this._tunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
