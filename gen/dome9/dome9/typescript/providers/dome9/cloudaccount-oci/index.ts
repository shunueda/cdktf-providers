// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_oci
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudaccountOciConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_oci#id CloudaccountOci#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_oci#organizational_unit_id CloudaccountOci#organizational_unit_id}
  */
  readonly organizationalUnitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_oci#tenancy_id CloudaccountOci#tenancy_id}
  */
  readonly tenancyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_oci#user_ocid CloudaccountOci#user_ocid}
  */
  readonly userOcid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_oci dome9_cloudaccount_oci}
*/
export class CloudaccountOci extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_cloudaccount_oci";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudaccountOci resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudaccountOci to import
  * @param importFromId The id of the existing CloudaccountOci that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_oci#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudaccountOci to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_cloudaccount_oci", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_oci dome9_cloudaccount_oci} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudaccountOciConfig
  */
  public constructor(scope: Construct, id: string, config: CloudaccountOciConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_cloudaccount_oci',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4'
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
    this._organizationalUnitId = config.organizationalUnitId;
    this._tenancyId = config.tenancyId;
    this._userOcid = config.userOcid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new cdktf.StringMap(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // home_region - computed: true, optional: false, required: false
  public get homeRegion() {
    return this.getStringAttribute('home_region');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organizational_unit_id - computed: false, optional: true, required: false
  private _organizationalUnitId?: string; 
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }
  public set organizationalUnitId(value: string) {
    this._organizationalUnitId = value;
  }
  public resetOrganizationalUnitId() {
    this._organizationalUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdInput() {
    return this._organizationalUnitId;
  }

  // organizational_unit_name - computed: true, optional: false, required: false
  public get organizationalUnitName() {
    return this.getStringAttribute('organizational_unit_name');
  }

  // organizational_unit_path - computed: true, optional: false, required: false
  public get organizationalUnitPath() {
    return this.getStringAttribute('organizational_unit_path');
  }

  // tenancy_id - computed: false, optional: false, required: true
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // user_ocid - computed: false, optional: false, required: true
  private _userOcid?: string; 
  public get userOcid() {
    return this.getStringAttribute('user_ocid');
  }
  public set userOcid(value: string) {
    this._userOcid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userOcidInput() {
    return this._userOcid;
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      organizational_unit_id: cdktf.stringToTerraform(this._organizationalUnitId),
      tenancy_id: cdktf.stringToTerraform(this._tenancyId),
      user_ocid: cdktf.stringToTerraform(this._userOcid),
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
      organizational_unit_id: {
        value: cdktf.stringToHclTerraform(this._organizationalUnitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_id: {
        value: cdktf.stringToHclTerraform(this._tenancyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ocid: {
        value: cdktf.stringToHclTerraform(this._userOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
