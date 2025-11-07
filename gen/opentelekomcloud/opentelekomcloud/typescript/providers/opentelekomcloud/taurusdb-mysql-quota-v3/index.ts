// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_quota_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaurusdbMysqlQuotaV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_quota_v3#enterprise_project_id TaurusdbMysqlQuotaV3#enterprise_project_id}
  */
  readonly enterpriseProjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_quota_v3#enterprise_project_name TaurusdbMysqlQuotaV3#enterprise_project_name}
  */
  readonly enterpriseProjectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_quota_v3#id TaurusdbMysqlQuotaV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_quota_v3#instance_quota TaurusdbMysqlQuotaV3#instance_quota}
  */
  readonly instanceQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_quota_v3#ram_quota TaurusdbMysqlQuotaV3#ram_quota}
  */
  readonly ramQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_quota_v3#vcpus_quota TaurusdbMysqlQuotaV3#vcpus_quota}
  */
  readonly vcpusQuota?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_quota_v3 opentelekomcloud_taurusdb_mysql_quota_v3}
*/
export class TaurusdbMysqlQuotaV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_taurusdb_mysql_quota_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaurusdbMysqlQuotaV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaurusdbMysqlQuotaV3 to import
  * @param importFromId The id of the existing TaurusdbMysqlQuotaV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_quota_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaurusdbMysqlQuotaV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_taurusdb_mysql_quota_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_quota_v3 opentelekomcloud_taurusdb_mysql_quota_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaurusdbMysqlQuotaV3Config
  */
  public constructor(scope: Construct, id: string, config: TaurusdbMysqlQuotaV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_taurusdb_mysql_quota_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
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
    this._enterpriseProjectName = config.enterpriseProjectName;
    this._id = config.id;
    this._instanceQuota = config.instanceQuota;
    this._ramQuota = config.ramQuota;
    this._vcpusQuota = config.vcpusQuota;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_instance_quota - computed: true, optional: false, required: false
  public get availabilityInstanceQuota() {
    return this.getNumberAttribute('availability_instance_quota');
  }

  // availability_ram_quota - computed: true, optional: false, required: false
  public get availabilityRamQuota() {
    return this.getNumberAttribute('availability_ram_quota');
  }

  // availability_vcpus_quota - computed: true, optional: false, required: false
  public get availabilityVcpusQuota() {
    return this.getNumberAttribute('availability_vcpus_quota');
  }

  // enterprise_project_id - computed: false, optional: false, required: true
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // enterprise_project_name - computed: false, optional: false, required: true
  private _enterpriseProjectName?: string; 
  public get enterpriseProjectName() {
    return this.getStringAttribute('enterprise_project_name');
  }
  public set enterpriseProjectName(value: string) {
    this._enterpriseProjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectNameInput() {
    return this._enterpriseProjectName;
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

  // instance_quota - computed: false, optional: true, required: false
  private _instanceQuota?: number; 
  public get instanceQuota() {
    return this.getNumberAttribute('instance_quota');
  }
  public set instanceQuota(value: number) {
    this._instanceQuota = value;
  }
  public resetInstanceQuota() {
    this._instanceQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceQuotaInput() {
    return this._instanceQuota;
  }

  // ram_quota - computed: false, optional: true, required: false
  private _ramQuota?: number; 
  public get ramQuota() {
    return this.getNumberAttribute('ram_quota');
  }
  public set ramQuota(value: number) {
    this._ramQuota = value;
  }
  public resetRamQuota() {
    this._ramQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramQuotaInput() {
    return this._ramQuota;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // vcpus_quota - computed: false, optional: true, required: false
  private _vcpusQuota?: number; 
  public get vcpusQuota() {
    return this.getNumberAttribute('vcpus_quota');
  }
  public set vcpusQuota(value: number) {
    this._vcpusQuota = value;
  }
  public resetVcpusQuota() {
    this._vcpusQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusQuotaInput() {
    return this._vcpusQuota;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      enterprise_project_name: cdktf.stringToTerraform(this._enterpriseProjectName),
      id: cdktf.stringToTerraform(this._id),
      instance_quota: cdktf.numberToTerraform(this._instanceQuota),
      ram_quota: cdktf.numberToTerraform(this._ramQuota),
      vcpus_quota: cdktf.numberToTerraform(this._vcpusQuota),
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
      enterprise_project_name: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectName),
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
      instance_quota: {
        value: cdktf.numberToHclTerraform(this._instanceQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ram_quota: {
        value: cdktf.numberToHclTerraform(this._ramQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vcpus_quota: {
        value: cdktf.numberToHclTerraform(this._vcpusQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
