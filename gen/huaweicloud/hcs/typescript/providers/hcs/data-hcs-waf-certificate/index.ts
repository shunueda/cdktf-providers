// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/waf_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcsWafCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/waf_certificate#enterprise_project_id DataHcsWafCertificate#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/waf_certificate#expire_status DataHcsWafCertificate#expire_status}
  */
  readonly expireStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/waf_certificate#id DataHcsWafCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/waf_certificate#name DataHcsWafCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/waf_certificate#region DataHcsWafCertificate#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/waf_certificate hcs_waf_certificate}
*/
export class DataHcsWafCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_waf_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcsWafCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcsWafCertificate to import
  * @param importFromId The id of the existing DataHcsWafCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/waf_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcsWafCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_waf_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/data-sources/waf_certificate hcs_waf_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcsWafCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcsWafCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_waf_certificate',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.21',
        providerVersionConstraint: '2.4.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._expireStatus = config.expireStatus;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enterprise_project_id - computed: false, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // expire_status - computed: false, optional: true, required: false
  private _expireStatus?: number; 
  public get expireStatus() {
    return this.getNumberAttribute('expire_status');
  }
  public set expireStatus(value: number) {
    this._expireStatus = value;
  }
  public resetExpireStatus() {
    this._expireStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireStatusInput() {
    return this._expireStatus;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      expire_status: cdktf.numberToTerraform(this._expireStatus),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_status: {
        value: cdktf.numberToHclTerraform(this._expireStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
