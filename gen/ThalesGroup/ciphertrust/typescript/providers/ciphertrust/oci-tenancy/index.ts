// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_tenancy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OciTenancyConfig extends cdktf.TerraformMetaArguments {
  /**
  * OCI Connection name. Set either connection_id or tenancy_ocid and tenancy_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_tenancy#connection_name OciTenancy#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Tenancy name. Set either connection_id or tenancy_ocid and tenancy_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_tenancy#tenancy_name OciTenancy#tenancy_name}
  */
  readonly tenancyName?: string;
  /**
  * Tenancy OCID Set either connection_id or tenancy_ocid and tenancy_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_tenancy#tenancy_ocid OciTenancy#tenancy_ocid}
  */
  readonly tenancyOcid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_tenancy ciphertrust_oci_tenancy}
*/
export class OciTenancy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_oci_tenancy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OciTenancy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OciTenancy to import
  * @param importFromId The id of the existing OciTenancy that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_tenancy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OciTenancy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_oci_tenancy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_tenancy ciphertrust_oci_tenancy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OciTenancyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OciTenancyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_oci_tenancy',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionName = config.connectionName;
    this._tenancyName = config.tenancyName;
    this._tenancyOcid = config.tenancyOcid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_name - computed: true, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tenancy_name - computed: true, optional: true, required: false
  private _tenancyName?: string; 
  public get tenancyName() {
    return this.getStringAttribute('tenancy_name');
  }
  public set tenancyName(value: string) {
    this._tenancyName = value;
  }
  public resetTenancyName() {
    this._tenancyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyNameInput() {
    return this._tenancyName;
  }

  // tenancy_ocid - computed: true, optional: true, required: false
  private _tenancyOcid?: string; 
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }
  public set tenancyOcid(value: string) {
    this._tenancyOcid = value;
  }
  public resetTenancyOcid() {
    this._tenancyOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyOcidInput() {
    return this._tenancyOcid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_name: cdktf.stringToTerraform(this._connectionName),
      tenancy_name: cdktf.stringToTerraform(this._tenancyName),
      tenancy_ocid: cdktf.stringToTerraform(this._tenancyOcid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_name: {
        value: cdktf.stringToHclTerraform(this._tenancyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_ocid: {
        value: cdktf.stringToHclTerraform(this._tenancyOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
