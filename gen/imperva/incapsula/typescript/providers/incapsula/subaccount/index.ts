// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubaccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default data region of the sub account for newly created sites. Options are `APAC`, `EU`, `US` and `AU`. Defaults to `DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount#data_storage_region Subaccount#data_storage_region}
  */
  readonly dataStorageRegion?: string;
  /**
  * Enable HTTP/2 for traffic between end-users (visitors) and Imperva for newly created SSL sites. Options are `true` and `false`. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount#enable_http2_for_new_sites Subaccount#enable_http2_for_new_sites}
  */
  readonly enableHttp2ForNewSites?: string;
  /**
  * Enable HTTP/2 support for traffic between Imperva and your origin server for newly created SSL sites. This option can only be 'true' once 'enable_http2_for_new_sites' is enabled for newly created sites. Options are `true` and `false`. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount#enable_http2_to_origin_for_new_sites Subaccount#enable_http2_to_origin_for_new_sites}
  */
  readonly enableHttp2ToOriginForNewSites?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount#id Subaccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The log level. Options are `full`, `security`, `none` and `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount#log_level Subaccount#log_level}
  */
  readonly logLevel?: string;
  /**
  * Available only for Enterprise Plan customers that purchased the Logs Integration SKU. Numeric identifier of the account that purchased the logs integration SKU and which collects the logs. If not specified, operation will be performed on the account identified by the authentication parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount#logs_account_id Subaccount#logs_account_id}
  */
  readonly logsAccountId?: number;
  /**
  * The newly created account's parent id. If not specified, the invoking account will be assigned as the parent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount#parent_id Subaccount#parent_id}
  */
  readonly parentId?: number;
  /**
  * Customer specific identifier for this operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount#ref_id Subaccount#ref_id}
  */
  readonly refId?: string;
  /**
  * The name of the new sub-account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount#sub_account_name Subaccount#sub_account_name}
  */
  readonly subAccountName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount incapsula_subaccount}
*/
export class Subaccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_subaccount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subaccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subaccount to import
  * @param importFromId The id of the existing Subaccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subaccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_subaccount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/subaccount incapsula_subaccount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubaccountConfig
  */
  public constructor(scope: Construct, id: string, config: SubaccountConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_subaccount',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataStorageRegion = config.dataStorageRegion;
    this._enableHttp2ForNewSites = config.enableHttp2ForNewSites;
    this._enableHttp2ToOriginForNewSites = config.enableHttp2ToOriginForNewSites;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._logsAccountId = config.logsAccountId;
    this._parentId = config.parentId;
    this._refId = config.refId;
    this._subAccountName = config.subAccountName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_storage_region - computed: false, optional: true, required: false
  private _dataStorageRegion?: string; 
  public get dataStorageRegion() {
    return this.getStringAttribute('data_storage_region');
  }
  public set dataStorageRegion(value: string) {
    this._dataStorageRegion = value;
  }
  public resetDataStorageRegion() {
    this._dataStorageRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageRegionInput() {
    return this._dataStorageRegion;
  }

  // enable_http2_for_new_sites - computed: false, optional: true, required: false
  private _enableHttp2ForNewSites?: string; 
  public get enableHttp2ForNewSites() {
    return this.getStringAttribute('enable_http2_for_new_sites');
  }
  public set enableHttp2ForNewSites(value: string) {
    this._enableHttp2ForNewSites = value;
  }
  public resetEnableHttp2ForNewSites() {
    this._enableHttp2ForNewSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2ForNewSitesInput() {
    return this._enableHttp2ForNewSites;
  }

  // enable_http2_to_origin_for_new_sites - computed: false, optional: true, required: false
  private _enableHttp2ToOriginForNewSites?: string; 
  public get enableHttp2ToOriginForNewSites() {
    return this.getStringAttribute('enable_http2_to_origin_for_new_sites');
  }
  public set enableHttp2ToOriginForNewSites(value: string) {
    this._enableHttp2ToOriginForNewSites = value;
  }
  public resetEnableHttp2ToOriginForNewSites() {
    this._enableHttp2ToOriginForNewSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2ToOriginForNewSitesInput() {
    return this._enableHttp2ToOriginForNewSites;
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

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // logs_account_id - computed: false, optional: true, required: false
  private _logsAccountId?: number; 
  public get logsAccountId() {
    return this.getNumberAttribute('logs_account_id');
  }
  public set logsAccountId(value: number) {
    this._logsAccountId = value;
  }
  public resetLogsAccountId() {
    this._logsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsAccountIdInput() {
    return this._logsAccountId;
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: number; 
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }
  public set parentId(value: number) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // ref_id - computed: false, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // sub_account_name - computed: false, optional: false, required: true
  private _subAccountName?: string; 
  public get subAccountName() {
    return this.getStringAttribute('sub_account_name');
  }
  public set subAccountName(value: string) {
    this._subAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subAccountNameInput() {
    return this._subAccountName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_storage_region: cdktf.stringToTerraform(this._dataStorageRegion),
      enable_http2_for_new_sites: cdktf.stringToTerraform(this._enableHttp2ForNewSites),
      enable_http2_to_origin_for_new_sites: cdktf.stringToTerraform(this._enableHttp2ToOriginForNewSites),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.stringToTerraform(this._logLevel),
      logs_account_id: cdktf.numberToTerraform(this._logsAccountId),
      parent_id: cdktf.numberToTerraform(this._parentId),
      ref_id: cdktf.stringToTerraform(this._refId),
      sub_account_name: cdktf.stringToTerraform(this._subAccountName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_storage_region: {
        value: cdktf.stringToHclTerraform(this._dataStorageRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_http2_for_new_sites: {
        value: cdktf.stringToHclTerraform(this._enableHttp2ForNewSites),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_http2_to_origin_for_new_sites: {
        value: cdktf.stringToHclTerraform(this._enableHttp2ToOriginForNewSites),
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
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logs_account_id: {
        value: cdktf.numberToHclTerraform(this._logsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parent_id: {
        value: cdktf.numberToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ref_id: {
        value: cdktf.stringToHclTerraform(this._refId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_account_name: {
        value: cdktf.stringToHclTerraform(this._subAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
