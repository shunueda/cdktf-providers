// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SddpDataLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit#audit_status SddpDataLimit#audit_status}
  */
  readonly auditStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit#engine_type SddpDataLimit#engine_type}
  */
  readonly engineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit#id SddpDataLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit#lang SddpDataLimit#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit#log_store_day SddpDataLimit#log_store_day}
  */
  readonly logStoreDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit#parent_id SddpDataLimit#parent_id}
  */
  readonly parentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit#password SddpDataLimit#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit#port SddpDataLimit#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit#resource_type SddpDataLimit#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit#service_region_id SddpDataLimit#service_region_id}
  */
  readonly serviceRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit#user_name SddpDataLimit#user_name}
  */
  readonly userName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit alicloud_sddp_data_limit}
*/
export class SddpDataLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sddp_data_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SddpDataLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SddpDataLimit to import
  * @param importFromId The id of the existing SddpDataLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SddpDataLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sddp_data_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_data_limit alicloud_sddp_data_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SddpDataLimitConfig
  */
  public constructor(scope: Construct, id: string, config: SddpDataLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sddp_data_limit',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditStatus = config.auditStatus;
    this._engineType = config.engineType;
    this._id = config.id;
    this._lang = config.lang;
    this._logStoreDay = config.logStoreDay;
    this._parentId = config.parentId;
    this._password = config.password;
    this._port = config.port;
    this._resourceType = config.resourceType;
    this._serviceRegionId = config.serviceRegionId;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_status - computed: true, optional: true, required: false
  private _auditStatus?: number; 
  public get auditStatus() {
    return this.getNumberAttribute('audit_status');
  }
  public set auditStatus(value: number) {
    this._auditStatus = value;
  }
  public resetAuditStatus() {
    this._auditStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditStatusInput() {
    return this._auditStatus;
  }

  // engine_type - computed: false, optional: true, required: false
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  public resetEngineType() {
    this._engineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
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

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // log_store_day - computed: false, optional: true, required: false
  private _logStoreDay?: number; 
  public get logStoreDay() {
    return this.getNumberAttribute('log_store_day');
  }
  public set logStoreDay(value: number) {
    this._logStoreDay = value;
  }
  public resetLogStoreDay() {
    this._logStoreDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStoreDayInput() {
    return this._logStoreDay;
  }

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // service_region_id - computed: false, optional: true, required: false
  private _serviceRegionId?: string; 
  public get serviceRegionId() {
    return this.getStringAttribute('service_region_id');
  }
  public set serviceRegionId(value: string) {
    this._serviceRegionId = value;
  }
  public resetServiceRegionId() {
    this._serviceRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRegionIdInput() {
    return this._serviceRegionId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_status: cdktf.numberToTerraform(this._auditStatus),
      engine_type: cdktf.stringToTerraform(this._engineType),
      id: cdktf.stringToTerraform(this._id),
      lang: cdktf.stringToTerraform(this._lang),
      log_store_day: cdktf.numberToTerraform(this._logStoreDay),
      parent_id: cdktf.stringToTerraform(this._parentId),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      service_region_id: cdktf.stringToTerraform(this._serviceRegionId),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_status: {
        value: cdktf.numberToHclTerraform(this._auditStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_type: {
        value: cdktf.stringToHclTerraform(this._engineType),
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
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_store_day: {
        value: cdktf.numberToHclTerraform(this._logStoreDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_region_id: {
        value: cdktf.stringToHclTerraform(this._serviceRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
