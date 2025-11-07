// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVraRegionEnumerationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to accept self signed certificate when connecting to the vCenter Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration#accept_self_signed_cert DataVraRegionEnumeration#accept_self_signed_cert}
  */
  readonly acceptSelfSignedCert?: boolean | cdktf.IResolvable;
  /**
  * Identifier of a data collector vm deployed in the on premise infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration#dc_id DataVraRegionEnumeration#dc_id}
  */
  readonly dcId?: string;
  /**
  * IP address or FQDN of the vCenter Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration#hostname DataVraRegionEnumeration#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration#id DataVraRegionEnumeration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password of the vCenter Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration#password DataVraRegionEnumeration#password}
  */
  readonly password: string;
  /**
  * Username of the vCenter Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration#username DataVraRegionEnumeration#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration vra_region_enumeration}
*/
export class DataVraRegionEnumeration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_region_enumeration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVraRegionEnumeration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVraRegionEnumeration to import
  * @param importFromId The id of the existing DataVraRegionEnumeration that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVraRegionEnumeration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_region_enumeration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/region_enumeration vra_region_enumeration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVraRegionEnumerationConfig
  */
  public constructor(scope: Construct, id: string, config: DataVraRegionEnumerationConfig) {
    super(scope, id, {
      terraformResourceType: 'vra_region_enumeration',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptSelfSignedCert = config.acceptSelfSignedCert;
    this._dcId = config.dcId;
    this._hostname = config.hostname;
    this._id = config.id;
    this._password = config.password;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_self_signed_cert - computed: false, optional: true, required: false
  private _acceptSelfSignedCert?: boolean | cdktf.IResolvable; 
  public get acceptSelfSignedCert() {
    return this.getBooleanAttribute('accept_self_signed_cert');
  }
  public set acceptSelfSignedCert(value: boolean | cdktf.IResolvable) {
    this._acceptSelfSignedCert = value;
  }
  public resetAcceptSelfSignedCert() {
    this._acceptSelfSignedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSelfSignedCertInput() {
    return this._acceptSelfSignedCert;
  }

  // dc_id - computed: false, optional: true, required: false
  private _dcId?: string; 
  public get dcId() {
    return this.getStringAttribute('dc_id');
  }
  public set dcId(value: string) {
    this._dcId = value;
  }
  public resetDcId() {
    this._dcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcIdInput() {
    return this._dcId;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_self_signed_cert: cdktf.booleanToTerraform(this._acceptSelfSignedCert),
      dc_id: cdktf.stringToTerraform(this._dcId),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_self_signed_cert: {
        value: cdktf.booleanToHclTerraform(this._acceptSelfSignedCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dc_id: {
        value: cdktf.stringToHclTerraform(this._dcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
